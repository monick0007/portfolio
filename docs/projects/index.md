---
hide:
  - toc
---

# Projects

Each of these came out of an investigation where I could see which part was
costing time and carrying no judgment. Running enough incidents across enough
environments is what makes that visible, and what makes it safe to hand those
parts to AI without giving away the analysis.

<div class="pf-projects">
 <a class="pf-proj">
  <div class="idx">01</div>
  <div>
   <h2>Evidence collection at scale</h2>
   <p>Collection from 50,000+ workstations and servers, cloud-hosted and
   on-premises, reduced to single-line commands. A workstation on-prem and a
   server in GCP are reached the same way. Scope gets narrowed before anything is
   pulled, and custom profiles cover the artifacts a given investigation needs
   when the defaults do not. The first hour goes to the investigation rather than
   to working out how to collect.</p>
   <div class="pf-meta">
    <span class="pf-badge live">Operational</span>
    <span class="pf-chip">Python</span><span class="pf-chip">AWS</span>
    <span class="pf-chip">GCP</span><span class="pf-chip">OpenStack</span>
   </div>
  </div>
 </a>
 <a class="pf-proj">
  <div class="idx">02</div>
  <div>
   <h2>AI harness for memory forensics</h2>
   <p>MemProcFS, Volatility, and YARA Forge driven from one place with their
   output correlated, so analysis starts from one shortlist instead of three raw ones.
   Custom YARA rules run alongside the curated sets, which means a rule written
   from an indicator found mid-investigation goes straight back across memory.
   It is built on community tooling deliberately. Every result traces to a named
   plugin or rule, so the path back to the artifact is always there.</p>
   <div class="pf-meta">
    <span class="pf-badge live">Operational</span>
    <span class="pf-chip">MemProcFS</span><span class="pf-chip">Volatility</span>
    <span class="pf-chip">YARA Forge</span>
   </div>
  </div>
 </a>
 <a class="pf-proj">
  <div class="idx">03</div>
  <div>
   <h2>Forensic workstation with open source tools</h2>
   <p>A handpicked Windows IR toolset defined as code with Packer, rather than a
   workstation assembled by hand that nobody can fully describe eighteen months
   later. If a finding came out of an analysis environment, being able to state
   precisely what that environment was is part of what makes the finding hold up.
   The build works; the toolset is still being refined as real analysis surfaces
   gaps.</p>
   <div class="pf-meta">
    <span class="pf-badge wip">In progress</span>
    <span class="pf-chip">Packer</span><span class="pf-chip">Windows</span>
    <span class="pf-chip">PowerShell</span>
   </div>
  </div>
 </a>
</div>

!!! note "The line"

    All three speed up collection and first-pass review. None of them conclude.
    The scoping call, the analysis, and the root-cause determination stay with
    me, because findings in an incident have to hold up to leadership, to
    counsel, and sometimes to a regulator.

    Implementation details are specific to my employer's environment. I am happy
    to talk through any of the approaches.
