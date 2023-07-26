import friends from '../../path/to/friends.json'
import * as Component from './OurFriends.styled'

const OurFriends = () => {
return(
    <Component.List>
        {friends.map(({id,title, url,address,imageUrl,addressUrl,email,phone})=>{
           
             return(
                <Component.Item key={id}>
                    <Component.CardTitle><a href={url} target="_blank"
                  rel="noopener noreferrer">{title}</a></Component.CardTitle>
                    <Component.MainWrap>
                        <Component.WrapImage>
                            <Component.Image src={imageUrl} alt={title}/>
                        </Component.WrapImage>
                    <Component.TextWrap>
                        <div>
                        <Component.Text>Time</Component.Text>
                    {/* <p>{workDays}</p> */}</div>
                    
                    <div><Component.Text>Address</Component.Text>
                  {address ?  <Component.Link href={addressUrl} target="_blank"
                  rel="noopener noreferrer">{address}</Component.Link> : <Component.Link>Only website</Component.Link>}</div>
                    
                  <div> <Component.Text>Email</Component.Text>
                   {email? <Component.Link href={`mailto:${email}`} target="_blank"
                  rel="noopener noreferrer">{email}</Component.Link> : <Component.Link href={url} target="_blank"
                  rel="noopener noreferrer">Only website</Component.Link>}</div>
                   
                  <div><Component.Text>Phone</Component.Text>
                    <Component.Link href={`tel:${phone}`}>{phone}</Component.Link></div>
                    
                    </Component.TextWrap>
                    </Component.MainWrap>
                </Component.Item>
             )
        })
           
            }
    </Component.List>
)
}

export default OurFriends