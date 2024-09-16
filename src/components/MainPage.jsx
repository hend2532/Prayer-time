import { useState } from "react"
import Card from "./Card"
import { useEffect } from "react"
import axios from "axios"


function MainPage() {
    const [time,setTime]=useState({
        "Fajr": "05:24",  
        "Dhuhr": "12:50",
        "Asr": "16:03",
        "Maghrib": "18:55",
        "Isha": "19:57",
    })

    const dataTiming=[
        {
        id:1,
        title:"الفجر",
        time:time.Fajr,
        img:"https://images.skynewsarabia.com/images/v1/2022/12/05/1578088/1100/619/1-1578088.jpg"
    },
        {
        id:2,
        title:"الظهر",
        time:time.Dhuhr,
        img:"https://www.gomhuriaonline.com/Upload/News/20-2-2024_05_34_31_GomhuriaOnline_1708400071.jpeg"
    },
        {
        id:3,
        title:"العصر",
        time:time.Asr,
        img:"https://www.gomhuriaonline.com/Upload/News/2-9-2023_00_58_00_GomhuriaOnline_1693605480.jpeg"
    },
        {
        id:4,
        title:"المغرب",
        time:time.Maghrib,
        img:"https://www.elbalad.news/Upload/libfiles/952/6/485.jpeg"
    },
        {
        id:5,
        title:"العشاء",
        time:time.Isha,
        img:"https://cdn.alweb.com/thumbs/awkatalsalah/article/fit727x545/%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9-%D8%B9%D9%84%D9%89-%D9%82%D9%8A%D8%A7%D9%85-%D8%A7%D9%84%D9%84%D9%8A%D9%84.jpg"
    },
]
  
    const [selectedCity, setSelectedCity]=useState({
        name:"القاهرة",
        apiName:"Cairo"
    })
    useEffect(()=>{
        axios.get(`https://api.aladhan.com/v1/timingsByCity?country=SA&city=${selectedCity.apiName}`)
        .then(response=>{
            setTime(response.data.data.timings)
        }).catch(error=> console.log(error))

    },[selectedCity])
   
    const city=[
        {
            name:"القاهرة",
            apiName:"Cairo"
        },
        {
        name:"المنوفية",
        apiName:"Menofia"
        },
        {
            name: "الجيزه",
            apiName: "Giza",
        },
        {
            name: "الاسكندرية",
            apiName: "Alex",
        },
]


const  handelCity=(event)=>{
    const cityObj=city.find((city)=>{
        return city.apiName===event.target.value
    })
    setSelectedCity(cityObj)
}
  return (
    <>
    <div className="times">
        <div className="time">
            {/* <h3>{new Date.toLocalestring()}</h3> */}
            <h3>{new Date().toLocaleString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>

            <h2>{selectedCity.name}</h2>
        </div>
        {/* <div className="time">
            <h3>متبقى على العصر </h3>
            
        </div> */}
    </div>
    <div className="product">
     { dataTiming.map((el)=>{
         return(
             <Card key={el.id} element={el}/>
            )   
        })}
    </div>
    <select onChange={handelCity}>
      {
        city.map(city=>
            <option key={city.name} value={city.apiName}>{city.name}</option>
        )
      }   
    </select>
    </>
  )
}

export default MainPage
