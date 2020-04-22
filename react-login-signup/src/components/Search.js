import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
const Search = (props) =>{
        return (
                <Form  action="" onSubmit={props.handlesubmit}>
                  <FormGroup >
                    <Input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search Movies"
                      onChange={props.handlechange}
                    />
                  </FormGroup>
                </Form>
        )
    }

export default Search
