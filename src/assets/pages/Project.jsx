import React from 'react'

function Project() {
  const ProjectData = [
    {
      ImgUrl: 'https://th.bing.com/th/id/OIP.PtCpcI_TDJvp3vUatdIxEwHaE7?w=800&h=532&rs=1&pid=ImgDetMain',
      title: 'TODO',
      About: 'Write Todo List',
      Tech: 'HTML,CSS,JS,React',
      link: 'https://note99.netlify.app/'
    },
    {
      ImgUrl: 'https://wallpaperaccess.com/full/6075689.png',
      title: 'MovieFlix',
      About: 'Copy of Netflix List Page',
      Tech: 'HTML,CSS,JS,React',
      link: 'https://flix07.netlify.app/'
    },
    {
      ImgUrl: 'https://codingkite.com/wp-content/uploads/2024/01/Screenshot_2024-01-25-23-19-30-157_com.foxdebug.acodefree-edited-1024x576.jpg',
      title: 'RatingBox',
      About: 'Rating Box For Giving Rating Out of 5',
      Tech: 'HTML,CSS,JS',
      link: 'https://rating07.netlify.app/'
    }
    ,
    {
      ImgUrl: 'https://www.rd.com/wp-content/uploads/2019/10/tic-tac-toe-scaled.jpg',
      title: 'TicTacToe',
      About: 'TicTacToe Game ',
      Tech: 'HTML,CSS,JS',
      link: 'https://ttt07.netlify.app/'
    },
    {
      ImgUrl: 'https://grade-calculator.net/img/grade-calculator.png',
      title: 'Grade Calculator',
      About: 'Calculate Your 10th Result',
      Tech: 'HTML,CSS,JS',
      link: 'https://result07.netlify.app/'
    },
    {
      ImgUrl: 'https://satyamdp4.netlify.app/assets/images/image-omelette.jpeg',
      title: 'Simple Omelett Recipe',
      About: 'Simple Omelett Recipe web Page for list of all Recipes ',
      Tech: 'HTML,CSS,JS',
      link: 'https://satyamdp4.netlify.app/'
    }
    ,
    {
      ImgUrl: 'https://th.bing.com/th/id/OIP.yIpl-V8MHuXp0XaQVZjzJQHaEL?w=570&h=322&rs=1&pid=ImgDetMain',
      title: 'advertising Grid Page',
      About: 'Create any Poster page for Advertising ads customize',
      Tech: 'HTML,CSS,JS',
      link: 'https://satyamdp7.netlify.app/'
    },
    {
      ImgUrl: 'https://i.ytimg.com/vi/bq55p_SlqMM/maxresdefault.jpg',
      title: 'BULB',
      About: 'Cute Bulb On Off Function ',
      Tech: 'HTML,CSS,JS',
      link: 'https://bulb-js.netlify.app/'
    },
    {
      ImgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/people-playing-paper-rock-scissors-royalty-free-illustration-1583269312.jpg',
      title: 'Rock Papar Scissors',
      About: 'Rock Papar Scissors Game play you and Computer',
      Tech: 'HTML,CSS,JS',
      link: 'https://rpsgame07.netlify.app/'
    },
    {
      ImgUrl: 'https://www.thebostoncalendar.com/system/events/photos/000/175/313/original/30freemembership.png?1523893138',
      title: 'Join our community',
      About: '30-day, hassle-free money back guarantee',
      Tech: 'HTML,CSS',
      link: 'https://satyamdp6.netlify.app/'
    },
    {
      ImgUrl: 'https://th.bing.com/th/id/OIP.e0dIkMx3JV_lh_jr8twQBgHaEc?w=900&h=540&rs=1&pid=ImgDetMain',
      title: 'Perfum Card',
      About: 'Advertising for Perfum Card',
      Tech: 'HTML,CSS',
      link: 'https://satyamdp1.netlify.app/'
    },
    {
      ImgUrl: 'https://s3.envato.com/files/228966643/Preview%20Image%20Set/Preview_01.jpg',
      title: 'Cards',
      About: 'Cards For providing Cars Information ',
      Tech: 'HTML,CSS',
      link: 'https://satyamdp2.netlify.app/'
    },



  ]







  return (



    <>
      <div className='flex justify-evenly items-center flex-col bg-lime-50'><br /><br />
        <h1 className='text-7xl font-bold pb-3  '>Projects</h1><br />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>

          {
            ProjectData.map((v, i) => {
              return (
                <>
                  <div>
                    {
                      <div key={i} className='border-2 border-lime-300 h-95 w-75 rounded-md hover:bg-lime-100'>


                        <div className='flex justify-evenly items-center flex-col gap-7'>
                          <img src={v.ImgUrl} alt={i} className='h-35 w-75' />
                          <h1 className='text-sm font-bold'>{v.title}</h1>
                          <h1 className='text-xs'>{v.About}</h1>
                          <p className='text-sm font-bold'>{v.Tech}</p>
                          <button className='text-xl font-bold bg-green-300 rounded-2xl w-20 h-8  hover:bg-red-300'><a href={v.link}>Go Live</a></button></div>

                      </div>

                    }
                  </div>
                </>
              )
            })
          }

        </div>

      </div>

    </>
  )
}

export default Project