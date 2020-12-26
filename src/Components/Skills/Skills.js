import React from 'react'
import {frontEnd} from '../../constants/Skills'
import {backend} from '../../constants/Skills'
import {databases} from '../../constants/Skills'
import {languages} from '../../constants/Skills'
import {miscellaneous} from '../../constants/Skills'
import './Skill.css'

const Skills = () => {
    return (
        <div style = {{background: ' rgb(255, 244, 184)', paddingTop: '20px'}}>
            <h1 className = "heading">Skills</h1>
            <div className = "container">
                <ul>
                    {frontEnd.map((skill) => (
                        <div>
                            <h3 className = "skill-title">{skill.main}</h3>
                            <li className = "skill-name" key = {skill.id}>{skill.name}</li>
                        </div>
                    ))}
                </ul>
                <ul>
                    {backend.map((skill) => (
                        <div>
                            <h3 className = "skill-title">{skill.main}</h3>
                            <li className = "skill-name"  key = {skill.id}>{skill.name}</li>
                        </div>
                    ))}
                </ul>
                <ul>
                    {databases.map((skill) => (
                        <div>
                            <h3 className = "skill-title">{skill.main}</h3>
                            <li className = "skill-name"  key = {skill.id}>{skill.name}</li>
                        </div>
                    ))}
                </ul>
                <ul>
                    {languages.map((skill) => (
                        <div>
                            <h3 className = "skill-title">{skill.main}</h3>
                            <li className = "skill-name"  key = {skill.id}>{skill.name}</li>
                        </div>
                    ))}
                </ul>
                <ul>
                    {miscellaneous.map((skill) => (
                        <div>
                            <h3 className = "skill-title">{skill.main}</h3>
                            <li  className = "skill-name" key = {skill.id}>{skill.name}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills
