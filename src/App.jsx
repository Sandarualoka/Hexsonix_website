import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ArrowRight, Code2, Globe2, Cpu, Layers3, Menu, X, MoveDown, Sparkles, ChevronRight, Github, Linkedin, Mail } from 'lucide-react'
import logo from './assets/hexsonix-logo.png'
import mark from './assets/hexsonix-mark.png'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {num:'01',icon:Code2,title:'Custom Software',description:'Powerful, purpose-built software that turns complex problems into beautifully simple experiences.',tags:['Web applications','Enterprise solutions']},
  {num:'02',icon:Globe2,title:'Web Experiences',description:'Distinctive digital products with seamless interactions, exceptional speed, and thoughtful design.',tags:['Websites','UI / UX design']},
  {num:'03',icon:Cpu,title:'AI & Automation',description:'Intelligent workflows and automation that bring your next competitive advantage closer.',tags:['AI integrations','Process automation']},
  {num:'04',icon:Layers3,title:'Product Engineering',description:'From the earliest idea to scalable reality. We build technology that grows with your vision.',tags:['MVP development','Scalable systems']},
]
const projects = [
  {index:'01',name:'The next big thing',type:'Digital products',gradient:'project-indigo',sub:'Your vision deserves a remarkable build.'},
  {index:'02',name:'Built to make an impact',type:'Enterprise technology',gradient:'project-blue',sub:'Sophisticated under the hood. Effortless in your hands.'},
]

function App(){
  const sceneRef = useRef(null)
  const portalRef = useRef(null)
  const logoRef = useRef(null)
  const heroCopyRef = useRef(null)
  const scrollLabelRef = useRef(null)
  const introRef = useRef(null)
  const [menuOpen,setMenuOpen] = useState(false)
  const [progress,setProgress] = useState(0)

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const tl = gsap.timeline({scrollTrigger:{trigger:sceneRef.current,start:'top top',end:'+=190%',scrub:0.65,pin:true,anticipatePin:1,invalidateOnRefresh:true,onUpdate:self=>setProgress(self.progress)}})
      tl.to(heroCopyRef.current,{opacity:0,y:-85,filter:'blur(12px)',duration:0.24},0)
        .to(scrollLabelRef.current,{opacity:0,y:30,duration:0.16},0)
        .to(logoRef.current,{scale:15,opacity:0,rotation:-7,transformOrigin:'50% 48%',ease:'power2.in',duration:0.9},0.08)
        .fromTo(portalRef.current,{clipPath:'circle(0% at 50% 49%)'},{clipPath:'circle(150% at 50% 49%)',ease:'power2.inOut',duration:0.85},0.30)
        .fromTo(introRef.current,{opacity:0,scale:1.22,filter:'blur(18px)'},{opacity:1,scale:1,filter:'blur(0px)',duration:0.5},0.62)
      gsap.utils.toArray('.reveal').forEach(el=>{
        gsap.fromTo(el,{opacity:0,y:65},{opacity:1,y:0,duration:0.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 87%',once:true}})
      })
    })
    return ()=>ctx.revert()
  },[])

  const navigate = (id)=>{setMenuOpen(false);document.querySelector(id)?.scrollIntoView({behavior:'smooth'})}

  return <div className="site-root">
    <header className="nav-bar">
      <a href="#top" className="brand" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}><img src={mark} alt=""/><span>HEXSONIX<span className="brand-dot">.</span></span></a>
      <nav className={menuOpen?'nav-links open':'nav-links'} aria-label="Main navigation">
        <button onClick={()=>navigate('#about')}>About us</button><button onClick={()=>navigate('#services')}>What we do</button><button onClick={()=>navigate('#work')}>Our approach</button>
        <button className="nav-cta" onClick={()=>navigate('#contact')}>Let's talk <ArrowUpRight size={15}/></button>
      </nav>
      <button className="menu-toggle" onClick={()=>setMenuOpen(v=>!v)} aria-label={menuOpen?'Close menu':'Open menu'}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section className="scroll-scene" ref={sceneRef} id="top" aria-label="Welcome to HEXSONIX">
      <div className="hero-surface">
        <div className="hero-topline" ref={heroCopyRef}><span className="hero-eyebrow"><span className="pulse"/> THE FUTURE IS UNDER CONSTRUCTION</span><h1>We make <em>what's next.</em></h1><p>Ideas are everywhere. Extraordinary execution is rare.</p></div>
        <img className="hero-logo" ref={logoRef} src={logo} alt="HEXSONIX company logo" />
        <div className="hero-bottom" ref={scrollLabelRef}><span>INNOVATE. BUILD. EVOLVE.</span><span className="scroll-prompt">SCROLL TO EXPLORE <MoveDown size={18}/></span><span>EST. FOR WHAT'S NEXT</span></div>
      </div>
      <div className="portal" ref={portalRef}>
        <div className="portal-grid"/><div className="portal-glow glow-a"/><div className="portal-glow glow-b"/>
        <div className="portal-content" ref={introRef}>
          <span className="section-eyebrow"><Sparkles size={15}/> WELCOME TO HEXSONIX</span>
          <h2>Don't just enter<br/>the future.<br/><span>Build it.</span></h2>
          <p>We engineer bold digital experiences and intelligent solutions for people who believe there's always a better way.</p>
          <button className="primary-button" onClick={()=>navigate('#about')}>Discover HEXSONIX <ArrowUpRight size={18}/></button>
        </div>
        <div className="portal-corner">A DIFFERENT KIND OF SOFTWARE COMPANY <span>↗</span></div>
      </div>
      <div className="scroll-meter" style={{opacity:progress>.03&&progress<.98?1:0}}><span style={{transform:`scaleY(${progress})`}}/></div>
    </section>

    <main>
      <section className="about section-wrap" id="about">
        <div className="section-caption reveal"><span className="caption-number">01 / THE COMPANY</span><span className="caption-rule"/></div>
        <div className="about-layout"><div className="reveal"><span className="small-heading">NOT JUST MORE CODE.</span><h2 className="large-heading">More <span>possibility.</span></h2></div><div className="about-description reveal"><p>HEXSONIX is a forward-thinking software company helping ambitious ideas become exceptional digital realities.</p><p>We combine sharp engineering, imaginative design, and a genuine obsession with solving the right problems.</p><a href="#services" className="text-link">See what we can do <ArrowUpRight size={18}/></a></div></div>
        <div className="stat-grid reveal"><div><strong>01<span>→∞</span></strong><span>From first idea to infinite possibilities</span></div><div><strong>100<span>%</span></strong><span>Driven by curiosity and craft</span></div><div><strong>∞</strong><span>Room to imagine something better</span></div></div>
      </section>

      <section className="services-section" id="services"><div className="section-wrap"><div className="section-caption reveal"><span className="caption-number">02 / WHAT WE DO</span><span className="caption-rule"/></div><div className="services-heading reveal"><div><span className="small-heading">THE THINGS WE'RE GREAT AT</span><h2 className="large-heading">Designed to <span>matter.</span></h2></div><p>Smart ideas need serious execution. We bring both.</p></div><div className="services-grid">{services.map(item=><article className="service-card reveal" key={item.num}><div className="service-head"><item.icon size={25} strokeWidth={1.5}/><span>{item.num}</span></div><div><h3>{item.title}</h3><p>{item.description}</p></div><div className="tags">{item.tags.map(t=><span key={t}>{t}</span>)}</div><ArrowUpRight className="card-arrow" size={20}/></article>)}</div></div></section>

      <section className="work-section section-wrap" id="work"><div className="section-caption reveal"><span className="caption-number">03 / OUR MINDSET</span><span className="caption-rule"/></div><div className="reveal"><span className="small-heading">THIS IS HOW WE THINK</span><h2 className="large-heading">Complex problems.<br/><span>Clear solutions.</span></h2></div><div className="work-grid">{projects.map(p=><article className={`work-card ${p.gradient} reveal`} key={p.index}><div className="work-card-top"><span>{p.index} / OUR PHILOSOPHY</span><ArrowUpRight/></div><div className="work-shape"><img src={mark} alt=""/></div><div className="work-card-bottom"><span>{p.type}</span><h3>{p.name}</h3><p>{p.sub}</p></div></article>)}</div></section>

      <section className="statement"><div className="statement-inner reveal"><span className="section-eyebrow">OUR BELIEF</span><h2>Technology should<br/>feel like <i>magic.</i><br/>And work like <i>science.</i></h2><div className="statement-line"><span>THAT'S THE HEXSONIX WAY.</span><span>✳</span></div></div></section>

      <section className="contact section-wrap" id="contact"><div className="section-caption reveal"><span className="caption-number">04 / LET'S CONNECT</span><span className="caption-rule"/></div><div className="contact-layout reveal"><div><span className="small-heading">GOT SOMETHING IN MIND?</span><h2 className="large-heading">Let's create<br/><span>something big.</span></h2><p>The next great idea could start with a simple hello.</p></div><a className="contact-orb" href="mailto:hello@hexsonix.com?subject=Let's%20build%20something" aria-label="Email HEXSONIX"><ArrowUpRight size={38}/><span>LET'S TALK</span></a></div><footer className="footer"><div className="footer-brand"><img src={mark} alt=""/><span>HEXSONIX</span></div><span>ENGINEERED FOR WHAT'S NEXT.</span><div><a href="mailto:hello@hexsonix.com">GET IN TOUCH <Mail size={15}/></a><a href="#top" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>BACK TO TOP ↑</a></div></footer></section>
    </main>
  </div>
}
export default App
