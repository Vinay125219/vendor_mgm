import{c as i,l as a,b as c}from"./client-store.BAdkeImJ.js";import{f as d}from"./format.BVwlPILG.js";function m(t){return c.find(s=>s.id===t)?.businessName??t}function r(){const t=document.getElementById("vs-ticket-list");if(!t)return;const s=a().tickets;t.innerHTML=s.map(e=>`
      <li class="flex flex-wrap items-center justify-between gap-3 py-4">
        <div>
          <p class="font-medium text-vs-fg">${e.subject.replace(/</g,"&lt;")}</p>
          <p class="text-xs text-vs-muted">${m(e.vendorId)}</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center rounded-full bg-vs-elevated px-2 py-0.5 text-[11px] font-medium uppercase text-vs-muted">${e.priority}</span>
          <span class="inline-flex items-center rounded-full bg-amber-500/15 px-2 py-0.5 text-[11px] font-medium uppercase text-amber-800 dark:text-amber-200">${e.status}</span>
          <span class="text-xs text-vs-muted">${d(e.updatedAt)}</span>
        </div>
      </li>`).join("")}r();document.getElementById("vs-ticket-form")?.addEventListener("submit",t=>{t.preventDefault();const s=t.target;if(!(s instanceof HTMLFormElement))return;const e=document.getElementById("vs-ticket-err");e?.classList.add("hidden");const n=new FormData(s);if(!i(String(n.get("subject")||""),String(n.get("vendorId")||""))){e&&(e.textContent="Subject required",e.classList.remove("hidden"));return}window.dispatchEvent(new CustomEvent("vs:toast",{detail:{message:"Ticket created",level:"success"}})),r(),s.reset()});
