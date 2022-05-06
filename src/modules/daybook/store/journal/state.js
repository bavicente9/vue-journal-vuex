
 export default () => ({
    isLoading:true,
    entries:[
       {
          id:new Date().getTime(),
          date: new Date().toDateString(),
          text:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero tempore facilis ex voluptatibus? Ipsum placeat quas, tempore et perferendis obcaecati deleniti voluptatem pariatur numquam a optio dolorum nisi sed officia!',
          picture:null, //https

       },
       {
          id:new Date().getTime()+1000,
          date: new Date().toDateString(),
          text:'  aoeuoeuaoeuaoeuoeu tempore facilis ex voluptatibus? Ipsum placeat quas, tempore et perferendis obcaecati deleniti voluptatem pariatur numquam a optio dolorum nisi sed officia!',
          picture:null, //https

       },
       {
          id:new Date().getTime()+2000,
          date: new Date().toDateString(),
          text:'  eeeeeeeeeeeeeeeeeeeeeeeetempore facilis ex voluptatibus? Ipsum placeat quas, tempore et perferendis obcaecati deleniti voluptatem pariatur numquam a optio dolorum nisi sed officia!',
          picture:null, //https

       },
    ]
 })