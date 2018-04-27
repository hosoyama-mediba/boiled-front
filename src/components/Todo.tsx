import "reflect-metadata";
import * as React from 'react';
import styled from 'styled-components';
import { IndexProps } from "../props/IndexProps";
// import { db } from '../src/datasources/db.datasource';
// import { TodoController } from '../src/controllers/todo.controller';
// import { TodoRepository } from '../src/repositories/todo.repository';

export default class Todo extends React.Component<IndexProps, any> {
    public static async getInitialProps(): Promise<IndexProps> {
        let name = "gggg";

        // const repo = new TodoRepository(db);
        // const todo = new TodoController(repo);
        // const todos = await todo.findTodos();
        // console.log(todos);

        return { name } as IndexProps;
    }

    /**
     * renderする
     *
     * @returns React.ReactNode
     */
    public render(): React.ReactNode {
        return (
            <div>
                <Title>Todo</Title>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

const Title = styled.h1`
    color: red;
    font-size: 50px;
`;
