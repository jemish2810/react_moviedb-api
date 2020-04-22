import React from 'react'
import { Link } from 'react-router-dom'
import {
    api_key
}from '../moviedbconfig'
import Popmovie from './Popmovies'
import Movielist from './movielist/Movielist'
import Populer from './Populer'

const Test = (props) => {
        return (
            <main class="py-3">
                
                    <div class="row justify-content-center">
                        <div class="col-md-12">     
                            <div class="card text-white bg-light mb-3">
                                <div class="card-body">
                                    {
                                        props.search.length ?
                                            <Movielist movies={props.search}/>
                                                            :
                                            <Populer  movies={props.movies} /> 
                                    }   
                                </div>
                            </div>
                        </div>
                        </div>
                
            </main>
        )
    }

export default Test