fetch('https://randomuser.me/api/').then((response) => {
    if (response.status === 200) {
        return response.json() 
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}).then((data) => {
    console.log(data.results[0].id.name)
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
      