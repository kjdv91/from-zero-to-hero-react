import { useState } from "react";

export function TwitterCard({ formatUser, name, username = 'unknow', img, initialIsFollowing}){
    const [isFollowing, setIsFolloswing] = useState(initialIsFollowing);
    const text = isFollowing ? 'Follow ': 'UnFollow';
    const btnClassName = isFollowing ? 'tw-followCard-button.is-following' : 'tw-followCard-button'
    
    

    const handClick = ()=>{
        setIsFolloswing(!isFollowing)
    }
    return (
        <article className='tc-follow-card'>
            <header className='tc-follow-header'>
                <img className='tw-follow-avatar'
                 src={`https://i.imgur.com/${img}`}
                 alt="avatar" width={180} height={200} />
                <div className='tw-followCard-info'>
                    <strong >{name}</strong>
                    {/* <span className='tw-follow-cardInfo-userName'>{formatUser(username)}</span> */}
                    <span className='tw-follow-cardInfo-userName'>@{username}</span>
                </div>
                <aside>
                    <button className={btnClassName} onClick={handClick}>
                    <span className="tw-followCard-text">{text}</span>
                       <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                        </button>
                </aside>
                
            </header>
        </article>

    )
}