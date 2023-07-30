import { useState } from "react";
import { ListTime, Text, TimeItem, TimeTitle, TimeWrap } from "./TimeList.styled";
import IconChevronUp from "../../images/icons/IconChevronUp"
import IconChevronDown from "../../images/icons/IconChevronDown"
import theme from 'components/theme';
import { useAuth } from "hooks";

const TimeList = ({workDays}) =>{
    const { currentTheme } = useAuth();
    const [openList, setOpenList] = useState(false);

    const daysOfWeek = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"]

    const handleOpenList = (e) => setOpenList(openList=>!openList)
    return(
        <ListTime name="days" onClick={(e) => handleOpenList()}>
                      <TimeTitle>working hours
                      {openList ? <IconChevronUp fill={theme[currentTheme].color.btnDark}/>
                      :<IconChevronDown fill={theme[currentTheme].color.btnLogOut}/>}</TimeTitle>
                      <TimeWrap style={{display: openList ? "block":"none"}}>
                        {workDays.map((day, index)=>{
                            const dayOfWeek = daysOfWeek[index];
                             return(
                                    <TimeItem key={index} value={day}><span>{dayOfWeek}</span> 
                                    <Text>{day.from}- {day.to}</Text>    
                                    {day.isOpen === true ?  "" : "Closed"}</TimeItem>
                            
                              );
                           
                        })}
                    </TimeWrap>
         </ListTime>
    )
}

export default TimeList