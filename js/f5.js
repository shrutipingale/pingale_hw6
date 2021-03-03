const link = document.getElementById("links");
const msIs = document.getElementById("ishomepage");
const business = document.createElement("li");
business.id = "cob";
business.innerHTML = '<li id = "cob"><a href = "https://www.csulb.edu/college-of-business"> College of Business</a></li>';
link.insertBefore(business,msIs);
