
import { useState } from "react"
import * as React from 'react';
import styles from "./App.css"
import { name } from "tar/lib/types";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';
import { blue } from "@mui/material/colors";






function Header({name}) {
  return (
  <div class="flex-container">
      <div id="header" class="flex-items">
        <header>
      
        
        <nav>
        
        <div class="nav-left">
        <ul>
            <li className="bigger1" ><b>{name}</b></li>
        </ul>
    </div>
    <div class="nav-right">
        <ul>
        
        <li className="bigger"><a href="/letschat">Let's Chat</a></li>
        <li className="bigger"><a href="/blog">Blog</a></li>
        <li className="bigger"><a href="/you">You</a></li>
        <li className="bigger"><a href="/ourwork">Our Work</a></li>
        <li className="bigger"><a href="/us">Us</a></li>
            

            
            
            
        </ul>
    </div>
        </nav>
       
        </header>
        <p><b>We build brands <br/>We share their stories</b><br/>
        The name Hencove is inspired by a tranquil harbor in Massachusetts called Hen's Cove.<br/>Every brand is on a journey and we are the proud co-captains with our clients on their voyage. <br/>Based in Watertown, Hencove offers both the personal feel of a boutique shop and the power of a full-service marketing agency.<br/>
         As a values-based agency, we are guided by a set of core principles that influence how we think, act and work. </p>

         <button className="button1"><b>Brand Services</b></button>
        </div>
      <div class="flex-items2">
      <div class="flex-container1">
  <div><p className="mission"><b>A full-service marketing and communications team</b><br/><br/>
Specializing in healthcare, finance, tech & professional services, and the oddball stuff</p></div>
  <div><p className="mission"><b>Storytellers for Growing Businesses</b><br/><br/>
Effective storytelling is a must in today’s business world. Brands of all shapes and sizes are expected to have a finely tuned and carefully developed story. We believe there’s an A.R.T. to good storytelling. The best brand stories are authentic, relevant and thoughtful. Hencove delivers strategic, creative ideas with practical, powerful marketing campaigns and projects.</p></div>
  <div><p className="mission"><b>Engaging Audiences through Stories</b><br/><br/>
Hencove exists to help brands find their voice, craft their story and engage audiences. From logos to websites to blogs to social media, we create an array of marketing and communications materials to help brands reach their target markets. We serve as a trusted marketing partner for emerging and growing businesses, particularly in the healthcare and finance industries.</p></div>
</div>

      
      
</div>
      <div class="flex-items3">
        <p className="subscribe"><b>Subscribe</b></p>
          <div><input /><button>Sign Up</button></div>        
   
      </div>

 </div>
  )
} 




export default function App() {
  return (
    <>
    <Header name={"Hencove"} />

  
    </>
  )
}
