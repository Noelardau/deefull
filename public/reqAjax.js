var ajax = {
    
    
    getComments(container){
        
        
            $.get('http://localhost:5050/getComments',(data)=>{
                container.html(data)
            })
         
      
    },
    
    
    addComments(launcher){
        launcher.click(function(e){
            e.preventDefault();
            if($('textarea').val()){
                $.post('http://localhost:5050/addComments',{comment:$('textarea').val()},(data)=>{
                    
                    $('.message').html(data)
                })
                
                $('textarea').val('')
            }

        
        })
        
    },

    // deleteComments(launcher,getId){
    //     launcher.click(function(e){
    //         e.preventDefault();
    //         $.post('http://localhost:5050/delComments',{id:getId},(data)=>{
    //             alert(data)
    //         })
    //     })


    // },
    addCommentsKey(launcher,key){
        
        launcher.on('keyup',function(e){
            e.preventDefault();
            if(e.key == key){

                if($('textarea').val()){
                    $.post('http://localhost:5050/addComments',{comment:$('textarea').val()},(data)=>{
                        
                        $('.message').html(data)
                    })
                    
                    $('textarea').val('')
                }
            }

        
        })
    }
    
    
}







export default ajax