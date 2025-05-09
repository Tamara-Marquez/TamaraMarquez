const profile = {
    fullName: "Tamara Marquez",
    age: 25,
    profession: "Full-Stack web programmer",
    skills: ["HTML", "CSS", "Javascript", "Myqsl"],
    contac : {
        email: "taamimarquez@gmail.com",
        location: "Posadas, Misiones",
        whatsapp: 3764831922
    }
}

function description (profile) {    

   return `Hello, my name is ${profile.fullName}. I'm ${profile.age} years old. I live in ${profile.contac.location}. 
    I'm a passionate and detail-oriented professional with a strong interest in ${profile.profession} 
    I'm currently in the learning process, but I truly enjoy solving problems, exploring new technologies, and working on projects that create real impact and help me gain valuable experience.
    I have experience with ${profile.skills.join(",")},and I'm always looking for opportunities to grow both personally and professionally. 
    My goal is to contribute to innovative teams and keep expanding my knowledge every day.
    
    Feel free to reach out to me for more information: 
    email: "${profile.contac.email}
    WhatsApp: "${profile.contac.whatsapp}` 

}

console.log (description(profile))

