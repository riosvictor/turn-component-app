import { useState } from "react";
import { GenreResponseProps } from "../App";
import { Button } from "./Button";

import '../styles/global.scss';
import '../styles/sidebar.scss';

interface IProps {
  genres: GenreResponseProps[]
  handleClickButton: (id: number) => void
  selectedGenreId?: number
}

export function SideBar({ genres, handleClickButton, selectedGenreId = 1 }: IProps) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}