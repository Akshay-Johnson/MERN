import http from 'http';
import url from 'url';


const sertver = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);


    const greet = {
        pathname: "/greet",
        query: {name: "akshay"},
        search: "?name=akshay",
        href: "/greet?name=akshay"
    };

    const student = {   
        pathname: "/student",
        query: { name: "john", age: "20", grade: "A" },
        search: "?name=john&age=20&grade=A",
        href: "/student?name=john&age=20&grade=A"
    };


    //student info
    if(parsedUrl.pathname === '/student'){ 
        const name = parsedUrl.query.name || student.query.name; 
        const age = parsedUrl.query.age || student.query.age;
        const grade = parsedUrl.query.grade || student.query.grade;

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Student Info:\nName: ${name}\nAge: ${age}\nGrade: ${grade}`);
   
    }
    //greet user
    else if(parsedUrl.pathname === '/greet'){
        const name = parsedUrl.query.name || 'Guest';
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Hi ${name}`);
    }
    
    //guest user
    else if(parsedUrl.pathname === '/'){
        const name = parsedUrl.query.name || 'Guest';
        const age = parsedUrl.query.age || 'Unknown';
        const grade = parsedUrl.query.grade || 'Not Assigned';

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Welcome ${name}!\nYour Age: ${age}\nYour Grade: ${grade}`);
    }
    
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Page Not Found');
    }   
});

sertver.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

