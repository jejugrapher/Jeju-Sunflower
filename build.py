# -*- coding: utf-8 -*-
"""작업파일/index_template.html + page_script.js + assets_src/*.webp  →  ../upload/index.html (한 파일)
   ※ 열어 보거나 올릴 파일은 upload/index.html 하나뿐입니다."""
import re, base64, os, sys
D=os.path.dirname(os.path.abspath(__file__))
t=open(os.path.join(D,"index_template.html"),encoding="utf-8").read()
t=t.replace("{{NEWJS}}",open(os.path.join(D,"page_script.js"),encoding="utf-8").read())
cache={}
def rep(m):
    n=m.group(1)
    if n not in cache:
        p=os.path.join(D,"assets_src",n+".webp")
        if not os.path.exists(p): sys.exit(f"자산 없음: {n}")
        cache[n]="data:image/webp;base64,"+base64.b64encode(open(p,"rb").read()).decode()
    return cache[n]
out=re.sub(r"\{\{([a-zA-Z0-9_]+)\}\}",rep,t)
assert not re.findall(r"\{\{[^}]+\}\}",out)
dst=os.path.join(D,"..","upload","index.html")
open(dst,"w",encoding="utf-8").write(out)
print("upload/index.html", f"{len(out.encode())/1024:.0f}KB", "자산", len(cache))
