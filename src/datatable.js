export const userColumns = [
    {
        field: "id", 
        headerName: "ID", 
        width: 70,
    },
    {
      field: "user",
      headerName: "User", 
      width: 230, 
      renderCell :(params)=>{
          return(
              <div className="cellWithImages">
                 <img className="cellImages" src={params.row.img} alt=""/>
                 {params.row.username}
              </div>
          );
      },
      
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
        

    },
    {
        field: "age",
        headerName: "Age",
        width: 100, 

    },
    {
        field: "status",
        headerName: "Status",
        width: 150,
        renderCell :(params)=>{
            return(
               <div className={`cellWithStatus ${params.row.status}`}>
                   {params.row.status}
               </div> 
            )
        }  

    },
]

export const userRows = [
    {
        id: 1,
        username: "Jamie",
        img: "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email: "jamie4life@gmail.com",
        age: 26,
    },
    {
        id: 2,
        username: "Alejandro54",
        img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email: "alejandro54@gmail.com",
        age: 66,
    },
    {
        id: 3,
        username: "Juan Jesus",
        img: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "pending",
        email: "jj4you@gmail.com",
        age: 22,
    },
    {
        id: 4,
        username: "Amarachi Obi",
        img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email: "amaObi@gmail.com",
        age: 21,
    },
    {
        id: 5,
        username: "Anita Rhodes",
        img: "https://images.pexels.com/photos/4063861/pexels-photo-4063861.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "passive",
        email: "rhodesAnita589@gmail.com",
        age: 29,
    },
    {
        id: 6,
        username: "Quan Nguyen",
        img: "https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "pending",
        email: "nguyenQQ@gmail.com",
        age: 24,
    },
    {
        id: 7,
        username: "Ana de basi",
        img: "https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "pending",
        email: "adb590@gmail.com",
        age: 26,
    },
    {
        id: 8,
        username: "Matilda Ford",
        img: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "passive",
        email: "matfordl@gmail.com",
        age: 29,
    },
    {
        id: 9,
        username: "Devin Rivera",
        img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email: "Riverin@gmail.com",
        age: 33,
    },
    {
        id: 10,
        username: "Trace Ross",
        img: "https://images.pexels.com/photos/14783579/pexels-photo-14783579.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "active",
        email: "traceRoss@gmail.com",
        age: 27,
    },
    
    

]