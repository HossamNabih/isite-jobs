module.exports =  function(site){

    site.get({name : '/jobs' , path : __dirname + '/site_files/html/index.html' , parser : "html css js"})
    site.get({name : '/my_cv' , path : __dirname + '/site_files/html/cv.html' , parser : "html css js"})
    site.post('/api/my_cv', (req, res) => {
        console.log(res)
    })
}