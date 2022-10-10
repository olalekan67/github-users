const GITHUB_URL = process.env.REACT_APP_GITHUB_URL


export const searchUsers = async (text) => {
    
    const params = new URLSearchParams({
        q:text,
    })
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`)

    const {items} = await res.json()
    
    return items
}

export const getUser = async (login) => {
    
    const res = await fetch(`${GITHUB_URL}/users/${login}`)

    if(res.status === 404){
        window.location('/notFound')
    }else{
        const data = await res.json()
        return data;
    }

    
}

export const getUserRepos = async (login) => {
    
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    })
    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)

    const data = await res.json()
    
    return data
}
