---
hide:
  - navigation
  - toc
---

<div class="pf-hero" markdown>

<div class="pf-head">
<div class="pf-avatarwrap">
<picture class="pf-avatar">
<source srcset="assets/monik-portrait.webp" type="image/webp">
<img src="assets/monik-portrait.jpg" alt="Illustrated portrait of Monik Aghariya" width="600" height="600">
</picture>
<a class="pf-badge" href="https://www.credly.com/badges/b40d1bb3-3fb8-43f5-850e-45b9ff341f47/public_url" target="_blank" rel="noopener noreferrer" title="Verify CISSP on Credly">
<img src="assets/badges/cissp.png" alt="CISSP certification badge, (ISC)2" width="52" height="52">
</a>
</div>
<div class="pf-headtext">
<div class="pf-name">Monik Aghariya</div>
<div class="pf-status"><span class="pf-dot"></span><span>Incident responder, Ottawa, ON</span></div>
</div>
</div>

# <span>Assess</span><span class="bar"></span><span>Respond</span><span class="bar"></span><span>Evolve</span><span class="bar"></span><span class="loop" aria-hidden="true">&#8635;</span><em>Repeat</em>

<p class="pf-motto">Threats evolve; so should the way we respond.</p>

<p class="pf-lede">
I command high-severity incidents across cloud and on-premises environments.
I reached incident response through two other security domains first:
<strong>threat intelligence</strong>, where the subject is the adversary, and
<strong>vulnerability management</strong>, where it is the exposure they aim at.
Both still shape how I run an investigation.
</p>

<p class="pf-lede">
I read threat advisories and track emerging fronts to stay ready for what is
coming, and to improvise a response plan when the incident in front of me does
not resemble the last one.
</p>

<div class="pf-cta" markdown>
[Experience :material-arrow-right:](experience.md){ .md-button .md-button--primary }
[Projects](projects/index.md){ .md-button }
</div>

<div class="pf-stats">
 <div class="pf-stat">
  <div class="k">Path in</div>
  <div class="v sm">Threat intelligence &middot; Vulnerability management &middot; Automation</div>
  <div class="d">Security domains before incident response</div>
 </div>
 <div class="pf-stat">
  <div class="k">Time to containment</div>
  <div class="v">~2 hrs</div>
  <div class="d">Average across incidents commanded</div>
 </div>
 <div class="pf-stat">
  <div class="k">Forensics</div>
  <div class="v sm">Host &middot; disk &middot; memory &middot; network</div>
  <div class="d">Root cause and full attack scope on multi-vector intrusions</div>
 </div>
 <div class="pf-stat">
  <div class="k">Incident command</div>
  <div class="v sm">End to end</div>
  <div class="d">Detection through containment, remediation, and review</div>
 </div>
</div>

</div>

## How I run a response

<div class="pf-cycle">

<div class="pf-stage">
<span class="num">01</span>
<h3>Preparation</h3>
<p>Playbooks and runbooks for the incident types that keep recurring, so the
analyst paged at 3am has a defined first hour.</p>
</div>

<div class="pf-stage">
<span class="num">02</span>
<h3>Detection</h3>
<p>Triage across CrowdStrike EDR and SecOps SIEM, and hunts for what never
alerted. The hunts follow what I have been reading about how actors are operating
now.</p>
<div class="pf-chips">
 <span class="pf-chip">CrowdStrike EDR</span><span class="pf-chip">SecOps SIEM</span>
 <span class="pf-chip">Splunk</span><span class="pf-chip">Elastic</span>
 <span class="pf-chip">Wiz</span>
</div>
<div class="pf-inline">
 <span class="lbl">Leads</span>
 <span class="nm">Threat hunting query library</span>
 <span class="qual">queries chain, so one result narrows the next</span>
</div>
</div>

<div class="pf-stage">
<span class="num">03</span>
<h3>Scoping</h3>
<p>Which assets, which identities, which data. Targeted artifacts come off suspect
hosts while it is still early. On incidents touching PII, that extends to the
exposure findings counsel needs for the notification call.</p>
<div class="pf-chips">
 <span class="pf-chip">Presidio</span><span class="pf-chip">Bulk Extractor</span>
 <span class="pf-chip">AWS</span><span class="pf-chip">GCP</span>
 <span class="pf-chip">OpenStack</span>
</div>
<a class="pf-inline" href="projects/">
 <span class="lbl">Built</span>
 <span class="nm">Evidence collection at scale</span>
 <span class="qual">pulls what an investigation asks for across 50,000+ hosts</span>
</a>
</div>

<div class="pf-stage">
<span class="num">04</span>
<h3>Containment</h3>
<p>Coordinating engineering, infrastructure, and product while briefing leadership
and legal counsel separately. Containment differs every time, and the action has
to clear the organization's governance as well as stop the threat.</p>
<div class="pf-inline">
 <span class="lbl">Contributes to</span>
 <span class="nm">Containment knowledge base and playbooks</span>
 <span class="qual">advise which action fits the incident and clears governance</span>
</div>
</div>

<div class="pf-stage">
<span class="num">05</span>
<h3>Eradication and recovery</h3>
<p>Host, disk, memory, and network forensics plus malware triage, establishing
root cause and confirming full scope before anything is called clean.</p>
<div class="pf-chips">
 <span class="pf-chip">Volatility</span><span class="pf-chip">MemProcFS</span>
 <span class="pf-chip">KAPE</span><span class="pf-chip">Axiom</span>
 <span class="pf-chip">FTK Imager</span><span class="pf-chip">Wireshark</span>
 <span class="pf-chip">YARA</span>
</div>
<a class="pf-inline" href="projects/">
 <span class="lbl">Built</span>
 <span class="nm">AI harness for memory forensics</span>
 <span class="qual">establishes what actually ran</span>
</a>
<a class="pf-inline" href="projects/">
 <span class="lbl">Built</span>
 <span class="nm">Forensic workstation with open source tools</span>
 <span class="qual">the analysis runs in an environment that can be stated afterwards</span>
</a>
</div>

<div class="pf-stage">
<span class="num">06</span>
<h3>Lessons learned</h3>
<p>TTPs and indicators go back into detections and hunt queries, and the playbooks
get corrected from what the response turned up. Phase 01 improves here.</p>
</div>

</div>

## My current mission

<div class="pf-band">
 <div class="pf-rule"></div>
 <div>
  <p class="after lead">I am on a mission to improvise day-to-day incident response
  with AI while keeping the judgment human-centered. AI takes a stab at artifact
  analysis, initial triage, correlation, timeline building, and the first pass
  across large volumes of data. The scoping call, the analysis, the containment
  decision, and the root cause stay with me, and every conclusion is confirmed
  against the underlying evidence.</p>
  <blockquote>AI does the legwork. <span class="hl">I still make the call.</span></blockquote>
 </div>
</div>
