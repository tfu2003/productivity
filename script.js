async function fetchData() {
    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': 'c58a30543bmsh2b9bb3602f31373p12cde0jsn104b941e3078',
            'X-RapidAPI-Host': 'api4yaware-yaware-data.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://api4yaware-yaware-data.p.rapidapi.com/account/json/v2/getEmployeesProductivityTime?access_key=ac8815286b1f304ae8e7527a96-63367-1667792999&dateFrom=2015-01-15&dateTo=2020-01-20&limit=5&productivity%5B%5D=productive', options);
    const record = await res.json();

    console.log('record', record);
}
fetchData();





