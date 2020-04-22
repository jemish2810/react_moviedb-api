/* eslint-disable no-unused-expressions */
import React  from 'react'
import Movie from './Movie'
const Movielist = (props) =>{
  return( <main class="py-3">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12">     
                            <div class="card">
                                <div class="card-header">
                                    Search movies
                                </div>
                                <div class="card-body">
                                        {
                                            props.movies.map((movies,i) => {
                                                return <Movie key = {i} image = {movies.poster_path}/>
                                            })
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

  )
}

export default Movielist
