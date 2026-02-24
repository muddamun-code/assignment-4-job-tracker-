let currentTab = "All";

let jobs = [

{
id:1,
company:"Mobile First Corp",
position:"React Native Developer",
location:"Remote",
type:"Full-time",
salary:"$130,000 - $175,000",
description:"Build cross-platform mobile applications using React Native.",
status:"Not Applied"
},

{
id:2,
company:"WebFlow Agency",
position:"Web Designer & Developer",
location:"Los Angeles, CA",
type:"Part-time",
salary:"$80,000 - $120,000",
description:"Create modern web experiences for clients.",
status:"Not Applied"
},

{
id:3,
company:"Google",
position:"Frontend Developer",
location:"Remote",
type:"Full-time",
salary:"$150,000",
description:"Develop UI for millions of users.",
status:"Not Applied"
},

{
id:4,
company:"Microsoft",
position:"Backend Developer",
location:"USA",
type:"Full-time",
salary:"$140,000",
description:"Build scalable backend systems.",
status:"Not Applied"
},

{
id:5,
company:"Amazon",
position:"Software Engineer",
location:"Canada",
type:"Remote",
salary:"$135,000",
description:"Work on cloud services.",
status:"Not Applied"
},

{
id:6,
company:"Tesla",
position:"Full Stack Developer",
location:"USA",
type:"Full-time",
salary:"$145,000",
description:"Build innovative applications.",
status:"Not Applied"
},

{
id:7,
company:"Spotify",
position:"Frontend Engineer",
location:"Remote",
type:"Remote",
salary:"$125,000",
description:"Improve music platform UI.",
status:"Not Applied"
},

{
id:8,
company:"Adobe",
position:"UI Designer",
location:"Remote",
type:"Full-time",
salary:"$115,000",
description:"Design user interfaces.",
status:"Not Applied"
}

];

const jobContainer=document.getElementById("jobContainer");
const emptyState=document.getElementById("emptyState");

function displayJobs(list){

jobContainer.innerHTML="";

list.forEach(job=>{

let badgeColor="bg-gray-200 text-blue-900";

if(job.status==="Interview")
badgeColor="bg-green-100 text-green-700";

if(job.status==="Rejected")
badgeColor="bg-red-100 text-red-700";


jobContainer.innerHTML+=`

<div class="bg-white p-5 rounded-lg shadow-sm">

<div class="flex justify-between">

<div>

<h3 class="font-bold text-blue-900 text-lg">
${job.company}
</h3>

<p class="text-gray-600">
${job.position}
</p>

<p class="text-gray-500 text-sm mt-1">
${job.location} • ${job.type} • ${job.salary}
</p>

</div>

<button onclick="deleteJob(${job.id})"
class="text-gray-400 hover:text-red-500">

<i class="fa fa-trash"></i>

</button>

</div>


<div class="mt-3">

<span class="px-3 py-1 rounded text-sm ${badgeColor}">
${job.status.toUpperCase()}
</span>

<p class="mt-2 text-gray-600 text-sm">
${job.description}
</p>

</div>


<div class="mt-4 flex gap-3">

<button onclick="setInterview(${job.id})"
class="border border-green-500 text-green-600 px-4 py-1 rounded hover:bg-green-50">

INTERVIEW

</button>

<button onclick="setRejected(${job.id})"
class="border border-red-500 text-red-600 px-4 py-1 rounded hover:bg-red-50">

REJECTED

</button>

</div>

</div>

`;

});

}


function setInterview(id){

let job=jobs.find(j=>j.id===id);
job.status="Interview";
refresh();

}

function setRejected(id){

let job=jobs.find(j=>j.id===id);
job.status="Rejected";
refresh();

}

function deleteJob(id){

jobs=jobs.filter(j=>j.id!==id);
refresh();

}


function refresh(){

let filtered=jobs;

if(currentTab==="Interview")
filtered=jobs.filter(j=>j.status==="Interview");

if(currentTab==="Rejected")
filtered=jobs.filter(j=>j.status==="Rejected");

displayJobs(filtered);

document.getElementById("totalCount").innerText=jobs.length;

document.getElementById("interviewCount").innerText=
jobs.filter(j=>j.status==="Interview").length;

document.getElementById("rejectedCount").innerText=
jobs.filter(j=>j.status==="Rejected").length;

document.getElementById("jobCount").innerText=
filtered.length+" jobs";


if(filtered.length===0){

emptyState.classList.remove("hidden");
jobContainer.classList.add("hidden");

}
else{

emptyState.classList.add("hidden");
jobContainer.classList.remove("hidden");

}

}


document.getElementById("allTab").onclick=()=>{
currentTab="All";
refresh();
};

document.getElementById("interviewTab").onclick=()=>{
currentTab="Interview";
refresh();
};

document.getElementById("rejectedTab").onclick=()=>{
currentTab="Rejected";
refresh();
};

refresh();