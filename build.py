# -*- coding: utf-8 -*-
"""index_template.html 의 {{이름}} 을 assets_src/이름.webp 데이터 URI로 치환 → index.html (단일 파일, 업로드 간편)"""
import re, base64, os, sys
D=os.path.dirname(os.path.abspath(__file__))
t=open(os.path.join(D,"index_template.html"),encoding="utf-8").read()
cache={}
def rep(m):
    n=m.group(1)
    if n not in cache:
        p=os.path.join(D,"assets_src",n+".webp")
        if not os.path.exists(p): sys.exit(f"자산 없음: {n}")
        cache[n]="data:image/webp;base64,"+base64.b64encode(open(p,"rb").read()).decode()
    return cache[n]
out=re.sub(r"\{\{([a-zA-Z0-9_]+)\}\}",rep,t)
left=re.findall(r"\{\{[^}]+\}\}",out)
assert not left, left
open(os.path.join(D,"upload","index.html"),"w",encoding="utf-8").write(out)
print("index.html", f"{len(out.encode())/1024:.0f}KB", "사용 자산", len(cache), sorted(cache))
