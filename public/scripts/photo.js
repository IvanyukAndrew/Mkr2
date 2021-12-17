async function Load(id) {
    let res = await fetch(`http://localhost:3000/photo/${id}`);
    if (res.ok) {
        return await res.json();
    }
}

async function Show() {
    const id = document.getElementById("id").value;
    const photo = await Load(id);
    document.getElementById("photoimg").src = photo.url;
}