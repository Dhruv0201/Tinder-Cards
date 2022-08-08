import React from 'react'
import TinderCard from 'react-tinder-card';
import './Card.css'
function Card() {
    const [Friends, setFriends] = React.useState([
        {
            name : 'Rachel',
            url : 'https://i.pinimg.com/736x/a2/c7/79/a2c779a042c765634c0394327086e322.jpg'
        },
        {
            name: 'Pablo',
            url :'https://pbs.twimg.com/media/E_-UhOnX0AYU64k.jpg'
        },
        {
            name: 'Saul Goodman',
            url :'https://static.wikia.nocookie.net/breakingbad/images/e/e0/Saul_2009.jpg'
        },
        {
            name: 'Kaleen Bhaiya',
            url :'https://i.imgflip.com/66wvbg.jpg'
        },
        {
            name: 'Walter White',
            url :'https://hips.hearstapps.com/esquireuk.cdnds.net/15/37/2048x2730/2048x2730-walter-white-rumour-bryan-cranston-43-jpg-21006810.jpg'
        },
        {
            name: 'Ganesh Gaitonde',
            url :'https://bollyworm.com/wp-content/uploads/2018/08/Nawazuddin-Siddiqui-Ganesh-Gaitonde-Sacred-Games-Story-Bollyworm.jpg'
        },
        
        {
            name: 'Munna Bhaiya',
            url :'https://akm-img-a-in.tosshub.com/aajtak/images/story/202010/untitled-2_32-sixteen_nine.jpg'
        },
        {
            name : 'Joey',
            url : 'https://www.koimoi.com/wp-content/new-galleries/2020/05/friends-trivia-18-matt-leblanc-aka-joey-tribbiani-auditioned-with-just-11-got-himself-this-after-his-first-paycheck-001.jpg'
        },
        {
            name: 'Jessy Pinkman',
            url :'https://i.insider.com/5d5dacd9510fc0045448b9c4?width=1000&format=jpeg'
        },
        {
            name: 'Gunther',
            url :'https://static.wikia.nocookie.net/friends/images/3/3d/Gunther.png'
        },
        {
            name: 'Sartaj',
            url :'https://static.wikia.nocookie.net/sacredgames/images/f/f8/Sartaaj2.jpg'
        },
        {
            name: 'Skinny Pete',
            url :'https://i.redd.it/ud3e225t8d981.jpg'
        
        },
        {
            name : 'Monica',
            url : 'https://cdn.cliqueinc.com/posts/286494/best-friends-outfits-286494-1585661072244-square.700x0c.jpg'
        },
        {
            name: 'Homelander',
            url :'https://m.media-amazon.com/images/M/MV5BMDI2ZmQ2N2EtZTMwMC00YWVmLWEyMTMtNTZiMGEyNzNhMWM5XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UX500_CR0,0,500,281_.jpg'
        
        },
        {
            name: 'Gus Fring',
            url : 'https://static.wikia.nocookie.net/breakingbad/images/5/54/BCS_S3_GusFring.jpg'
        },
        {
            name: 'Ross',
            url : 'https://upload.wikimedia.org/wikipedia/en/6/6f/David_Schwimmer_as_Ross_Geller.jpg'
        },
        {
            name: 'Tuco Salamnaca',
            url :'https://i.insider.com/5f24755240c1f32b343917c6?width=600&format=jpeg&auto=webp'
        },
        
        {
            name: 'Mike Ehrmantraut',
            url :'https://cdnb.artstation.com/p/assets/images/images/013/585/075/large/abdelrahman-kubisi-main-final.jpg'
        },
        {
            name : 'Chandler',
            url : 'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/chandler_bing_0.jpg'
        },
        
        {
            name : 'Pheobe',
            url : 'https://i.cdn.newsbytesapp.com/images/l204_18621600846090.jpg'
        }
        
    ]);

  return (
    <div className='Cardc'>{
     Friends.map( Friend =>(
        <TinderCard
        className='swipe'
        key={Friend.name}
        preventSwipe={['up' ,'down']}>
            <div  className='card'
            style={ { backgroundImage:`url(${Friend.url})` } }
            >
                <h2>{Friend.name}</h2>
            </div>
        </TinderCard>
     ))
    };
    </div>  
  )
}

export default Card 