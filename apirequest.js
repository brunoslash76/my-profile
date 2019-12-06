const BASE_URL = 'https://api.github.com/users/brunoslash76/repos';
const myHeaders = new Headers();
var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};
const pjSection = document.querySelector('#projects_id');
const reposList = document.querySelector('#repos');

const fetchGitRepos = () => {
    fetch(BASE_URL, myInit)
        .then(data => data.json())
        .then(data => {
            const [a, b, c, d] = data;
            setReposList([a, b, c, d])
        })
        .catch(e => console.error(e))
}

const setReposList = (data) => {
    
    data.map(el => {
        console.log(el);
        let list = document.createElement('li');
        let span = document.createElement('span');
        list.classList.add('project-tile')
        let span2 = document.createElement('span');
        let img = document.createElement('img');
        let a = document.createElement('a');
        const {
            name,
            created_at,
            url,
        } = el;
        img.style.marginRight = '10px'
        list.classList.add('repo');
        span.innerHTML = `${name}`;
        span2.innerHTML = `${created_at}`
        a.style.color = '#fff';
        a.href = url
        a.appendChild(span)
        a.appendChild(span2)
        img.src = './assets/icons/folder.png'
        list.appendChild(img)
        list.appendChild(a);
        reposList.appendChild(list);
    })
    
}


fetchGitRepos();