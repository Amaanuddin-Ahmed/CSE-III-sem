import pymupdf,sys
f=sys.argv[1]; pages=sys.argv[2] if len(sys.argv)>2 else '1'
d=pymupdf.open(f)
for n in [int(x)-1 for x in pages.split(',')]:
    print('==== PAGE',n+1)
    print(d[n].get_text('text'))
