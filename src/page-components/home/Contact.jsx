import React , {useState} from 'react'
import { TextField, MenuItem, Button, Card, CardContent } from "@mui/material";

const Contact = () => {
  
    const [contact, setContact] = useState({
        email: "",
        name: "",
        phone: "",
        subject: "",
        description: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("contact Submitted:", contact);
      };
    
      const styles = { mb:3 , width:'80%' , ml:'50px'}
      return (
        <Card className="shadow-lg rounded-lg w-full md:w-2/5  mx-auto mt-10">
          <CardContent>
            <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
           
              <TextField
                label="Your Name"
                name="name"
                value={contact.name}
                onChange={handleChange}
                required
                sx={styles}
              />
    
             <TextField
                label="Your Email"
                name="email"
                value={contact.email}
                type='email'
                onChange={handleChange}
                required
                sx={styles}
              />

             <TextField
                label="Your Phone Number"
                name="phone"
                value={contact.phone}
                type='phone'
                onChange={handleChange}
                required
                sx={styles}
              />
        
              <TextField
                label="Subject"
                name="subject"
                value={contact.subject}
                onChange={handleChange}
                required
                sx={styles}
              />
    
              <TextField
                label="Description"
                name="description"
                multiline
                rows={3}
                value={contact.description}
                onChange={handleChange}
                required
                sx={styles}
              />
    
              <Button type="submit" variant="contained"  sx={{...styles  , backgroundColor:'orange' , color:'black' , mb:1}}>
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      );
}

export default Contact