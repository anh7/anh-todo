import { TodoItem } from './todo-item';

describe('TodoItem', () => {
  let todoItem: TodoItem;

  beforeEach(() => {
    todoItem = new TodoItem('Test Todo Item');
  });

  it('should create an instance', () => {
    expect(todoItem).toBeTruthy();
  });

  it('should have a title', () => {
    expect(todoItem.title).toEqual('Test Todo Item');
  });

  it('should not be completed by default', () => {
    expect(todoItem.completed).toBe(false);
  });

  //// TO-DO
  // it('should have a unique id', () => {
  //   const todoItem2 = new TodoItem('Another Test Todo Item');
  //   expect(todoItem.id).not.toEqual(todoItem2.id);
  // });
});