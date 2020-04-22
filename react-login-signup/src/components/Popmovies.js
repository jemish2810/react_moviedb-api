import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getDefaultNormalizer } from '@testing-library/react'

const Popmovie = (props) => {
      const mystyle = {
          width: "13rem",
          margin:"10px",
          display:"inline-block",
        
      };
        return (
              <div className="card shadow  bg-white rounded"  style={mystyle}>
                <div className="card-img">
                      <div className="card-img">
                    {
                        // eslint-disable-next-line jsx-a11y/img-redundant-alt
                        props.image == null ? < img src = 
                            'https://image.tmdb.org/t/p/w185_and_h278_bestv2/1pRNzOM7OQA29cVayaCheBI4vn7.jpg'
                        
                        alt = "card image"
                        style = {
                            {
                                width: "100%",
                                height: 360
                            }
                        }
                        />:
                        // eslint-disable-next-line jsx-a11y/img-redundant-alt
                        <img src = {
                            `https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.image}`
                        }
                        alt = "card image"
                        style = {
                            {
                                width: "100%",
                                height: 360
                            }
                        }
                        />
                    }
                </div>
                </div>
                <div className="card-body">
                    <p ><a href="#">View Details</a></p>
                </div>
            </div>
        )
    }
export default Popmovie