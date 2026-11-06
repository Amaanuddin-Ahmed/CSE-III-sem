import urllib.request

url = 'https://mgit-pyq-hub.vercel.app'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=10) as r:
    html = r.read().decode('utf-8')
    sem_pos = html.find('data-exam-id="sem"')
    mid1_pos = html.find('data-exam-id="mid1"')
    mid2_pos = html.find('data-exam-id="mid2"')
    print('HTTP Status:', r.status)
    print('Order indices -> Sem End:', sem_pos, 'Mid-1:', mid1_pos, 'Mid-2:', mid2_pos)
    print('Sem End is first:', sem_pos < mid1_pos < mid2_pos)
    print('Sem End has Upcoming badge:', 'Upcoming' in html[sem_pos:sem_pos+400])
    print('Mid-2 has Ongoing badge:', 'Ongoing' in html[mid2_pos:mid2_pos+400])

version_url = 'https://mgit-pyq-hub.vercel.app/version.json'
with urllib.request.urlopen(version_url, timeout=10) as vr:
    print('Live version.json:', vr.read().decode('utf-8'))
