
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
        
        <li className="bigger"><a href="/letschat">Example</a></li>
        <li className="bigger"><a href="/blog">Example1</a></li>
        <li className="bigger"><a href="/you">Example2</a></li>
        <li className="bigger"><a href="/ourwork">Example3</a></li>
        <li className="bigger"><a href="/us">Example4</a></li>
            

            
            
            
        </ul>
    </div>
        </nav>
       
        </header>
        <p><b>sakdsjlfjlsajfkuada<br/>asdkhsakjdhkjhakhdkhskajd</b><br/>
        sajdhfuihfuihuisfhuidsysfuihnfuiwdhfuihuishuihfdosoysarysoidoiahdioh<br/>ajsdlkjslkdjisajioeioaseojoisaueyausufsfufvusfuisdfuidsifydsfusdfysyf <br/>dkjhfdlkhkjsdhfakhsdkhaskfjhlkasjflkaslkfnahuisyeiuyuiwyaiuegdkjajskbsdjdkas<br/>
        jhjsdhfdkjfhjdshfdhjkhfjshkjfhdjkghjkfdhkjghjfgfghfghfgfghjghjsdflusdahuifhihfduhdf</p>

         <button className="button1"><b>sahdjkshdkjsyfjdf</b></button>
        </div>
      <div class="flex-items2">
      <div class="flex-container1">
  <div><p className="mission"><b>kjdhjsafhjksahfjkhjksdfggjf</b><br/><br/>
sdjhkjhfjkdhfjkhsjhfjhjksfhjkdshkjfbdwfiuweyiuyfiuehsdibskjfbdskjjfjdbjfndjfndjisuds</p></div>
  <div><p className="mission"><b>kjhjhgffdfgsgfsdgfvcdfgsgfsdsgfsgfsgfgfsfsfssfs</b><br/><br/>
fjhgfghfghfghfghfghfghfghfhffdfdfdfdfdfdfdfdgfdfdfdvgvtyvytvtyvtyvtyvtyvtyvtyvtyvghvyuttttytvtyccfcytctyctcghcytctycytctcctyctyctycttyctyctyctycycvyvuyvbyubybyuybniniuugyucxeerseexxexexeexexerxerzwzwzwe</p></div>
  <div><p className="mission"><b>tftffgccfcfgxcgfxdxgfxcfgxfgxgfxgfxffx</b><br/><br/>
ghccvvvbnvnbvbnvghcgfcfgxdxjgyugyuvyvyuvyuvyuvyuvyuvyuvyuvyuvuyvuyvyuvyuvyuvyvvvyyuvuyvyuvyvyvyuvyuvyuvyuvyububybubuyvtycccxtxtxtctycttvuyvyubdfxdxdxgfxfgxfgxfgx</p></div>
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
    <Header name={"insert company name here"} />

  
    </>
  )
}
