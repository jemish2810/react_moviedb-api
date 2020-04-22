import React from 'react'
import { Link } from 'react-router-dom'
import {
    api_key
}from '../moviedbconfig'
import Popmovie from './Popmovies'

const Populer = (props) => {
        return (
            <main class="py-3">
                    <div class="row justify-content-center">
                        <div class="col-md-12">     
                            <div class="card text-white bg-light mb-3">
                                <div class="card-heade bg-lightr">
                                    Popular movies
                                </div>
                                <div class="card-body">
                                   {
                                        props.movies.map((movies,i) => {
                                             return <Popmovie key = {i} image = {movies.poster_path}/>
                                        })
                                   }
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        )
    }

export default Populer