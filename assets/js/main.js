    // const xhr=new XMLHttpRequest()
    // xhr.open('GET','https://jsonplaceholder.typicode.com/', true)
    // xhr.send()
    // xhr.onload=()=>{
    //     console.log(xhr.responseText);
    // }

    document.querySelector('.contact_container_form').addEventListener('submit',(event)=>{

        event.preventDefault()
        const fulname=document.querySelector('.contact_container_form input').value
        const desc_telega=document.getElementById('desc_telega').value
        
        const params={
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                chat_id:-1002106216702,
                text:`
                ФИО:${fulname}\n
                Пожелание:${desc_telega}
                `
            })
        }
        fetch('https://api.telegram.org/bot7207231079:AAFR21ydwp2ekBoB3ZTgIuQcPFQiCT9DD7U/sendMessage',params).then((res)=>{
            console.log(res);
        })
    })