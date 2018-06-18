let x 

fetch('https://randomuser.me/api/').then((response) => {
    if (response.status === 200) {
        return response.json() 
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data) => {
    printx(data)
    
}).catch((error) => {
    console.log(error)
})


 $.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
 

 function printx (data) {
    document.writeln("<img src='" + data.results[0].picture.large + "'>" + "</img>")
} 

