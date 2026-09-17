"use client";
import {useEffect,useState} from "react";
const examples=["diff sin(x)*x^2","diff2 exp(x)*cos(x)","integrate x^2 from 0 to 3","limit sin(x)/x at 0","root x^3-x-2 guess 1","taylor exp(x) at 0 order 6"];
const refs=[
["Derivative rules","(x^n)' = n x^(n-1) • (fg)' = f'g + fg' • (f/g)' = (f'g-fg')/g²"],
["Chain rule","d/dx f(g(x)) = f'(g(x))g'(x)"],
["Fundamental theorem","d/dx ∫ₐˣ f(t)dt = f(x)"],
["Integration by parts","∫u dv = uv − ∫v du"],
["Taylor series","f(x) = Σ f⁽ⁿ⁾(a)(x-a)ⁿ/n!"],
["L'Hôpital","For eligible 0/0 or ∞/∞ forms, lim f/g = lim f'/g' when conditions hold."],
["Gradient","∇f = ⟨fₓ,fᵧ,f_z⟩"],
["Divergence theorem","∭ᵥ ∇·F dV = ∬ₛ F·n dS"],
["Green's theorem","∮C P dx + Q dy = ∬D (Qₓ−Pᵧ)dA"],
["Stokes' theorem","∬S (∇×F)·n dS = ∮∂S F·dr"]
];
export default function Home(){const [tab,setTab]=useState("Solver"),[q,setQ]=useState("diff sin(x)*x^2"),[res,setRes]=useState<any>(null),[hist,setHist]=useState<any[]>([]),[graph,setGraph]=useState("sin(x)"),[note,setNote]=useState("");
useEffect(()=>{try{setHist(JSON.parse(localStorage.getItem("calc-history")||"[]"));setNote(localStorage.getItem("calc-note")||"")}catch{}},[]);
async function solve(x=q){setQ(x);let r=await fetch("/api/calc",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({q:x})});let d=await r.json();setRes(d);if(!d.error){let h=[{q:x,r:d.result,t:new Date().toLocaleString()},...hist].slice(0,30);setHist(h);localStorage.setItem("calc-history",JSON.stringify(h))}}
async function draw(){setTab("Graph");setTimeout(async()=>{const Plotly=(await import("plotly.js-dist-min")).default;const math=await import("mathjs");let xs=[],ys=[];for(let x=-10;x<=10;x+=.05){xs.push(x);try{ys.push(Number(math.evaluate(graph,{x})))}catch{ys.push(NaN)}}Plotly.newPlot("plot",[{x:xs,y:ys,type:"scatter",mode:"lines",name:graph}],{paper_bgcolor:"#0d1822",plot_bgcolor:"#0d1822",font:{color:"#eaf2f7"},margin:{t:25},xaxis:{gridcolor:"#213647"},yaxis:{gridcolor:"#213647"}},{responsive:true})},30)}
function practice(){let pool=["diff x^5-3*x^2+7","diff sin(x^2)","integrate x^3+2*x from 0 to 2","limit (x^2-1)/(x-1) at 1","root cos(x)-x guess 1","taylor sin(x) at 0 order 7"];setQ(pool[Math.floor(Math.random()*pool.length)]);setTab("Solver");setRes(null)}
return <div className="shell"><aside className="side"><div className="brand">Calculus<span>Studio</span></div><div className="nav">{["Solver","Graph","Reference","Practice","Notebook"].map(x=><button key={x} className={tab===x?"active":""} onClick={()=>x==="Practice"?practice():setTab(x)}>{x}</button>)}</div><p className="tiny" style={{margin:"30px 10px"}}>Symbolic • Numerical • Visual<br/>Runs as a Vercel web application.</p></aside><main className="main"><div className="eyebrow">Mathematics workspace</div><h1>{tab}</h1><p className="muted">Solve, explore, visualize, and keep your calculus work in one place.</p>
{tab==="Solver"&&<><div className="card"><div className="inputrow"><input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==="Enter"&&solve()} placeholder="Enter a calculus command…"/><button className="primary" onClick={()=>solve()}>Solve</button></div><div className="chips">{examples.map(x=><button className="chip" key={x} onClick={()=>solve(x)}>{x}</button>)}</div></div>{res&&<div className="grid"><div className="card"><h2>Result</h2><div className={res.error?"error result":"result"}>{res.error||res.result}</div></div><div className="card"><h2>Method</h2><div className="steps">{res.steps?.map((x:string,i:number)=><div key={i}>{i+1}. {x}</div>)}</div></div></div>}</>}
{tab==="Graph"&&<div className="card"><div className="inputrow"><input value={graph} onChange={e=>setGraph(e.target.value)} onKeyDown={e=>e.key==="Enter"&&draw()} placeholder="Function of x"/><button className="primary" onClick={draw}>Plot</button></div><div id="plot" className="plot"></div></div>}
{tab==="Reference"&&<div className="refgrid">{refs.map(([a,b])=><div className="ref" key={a}><b>{a}</b><p>{b}</p></div>)}</div>}
{tab==="Notebook"&&<><div className="card"><h2>Notes</h2><textarea className="field" value={note} onChange={e=>{setNote(e.target.value);localStorage.setItem("calc-note",e.target.value)}} placeholder="Write definitions, derivations, reminders, or study notes…"/></div><div className="card"><h2>Calculation history</h2><div className="history">{hist.length?hist.map((h,i)=><div className="historyItem" key={i} onClick={()=>{setQ(h.q);setTab("Solver");setRes({result:h.r,steps:[]})}}><b>{h.q}</b><div>{h.r}</div><div className="tiny">{h.t}</div></div>):<span className="muted">No calculations yet.</span>}</div></div></>}
</main></div>}
