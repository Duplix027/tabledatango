'use client';

import Image from "next/image";
import { useState } from 'react';
import { GetKeyword } from './input.jsx';
import brokenHeart from "./public/images/broken-heart-svgrepo-com.svg";
import heart from "./public/images/heart-svgrepo-com.svg";
 
export function LikeButton() {
  const [likes, setLikes] = useState([]);
  // const [input, setInput] = useState('');
  const keyword = GetKeyword();

  function addLike() {
    if (keyword.trim() === '') return; // ignore empty input
    setLikes([...likes, keyword.trim()]);
  }

  function handleClick() {
    addLike();
    console.log(likes);

  }
 
  return (
  <button onClick={handleClick}>
     <Image
      src={heart}
      width={16}
      height={16}
     />
     Like
  </button>
  );
}


export function DislikeButton() {
  function handleClick() {
  }
  return (
    <button onClick={handleClick}>
      <Image
        src={brokenHeart}
        width={16}
        height={16}
       />
  Dislike
</button>
  )
}