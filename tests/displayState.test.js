import state from '../src/state/displayState';
import VerbModule from '../src/modules/VerbModule';
import MainMenuModule from '../src/modules/MainMenuModule';

jest.mock('readline');
jest.mock('../src/modules/VerbModule');
jest.mock('../src/modules/MainMenuModule');

afterEach(() => jest.clearAllMocks());

describe('state::setState', () => {
  test('state::display method called when setState passed new module', () => {
    VerbModule.prototype.display = jest.fn();
    VerbModule.prototype.onExit = jest.fn();

    state.setState(new VerbModule);

    expect(VerbModule.prototype.onExit).not.toBeCalled();
    expect(VerbModule.prototype.display).toBeCalledTimes(1);
  });

  test('state::onExit method called prior to changing state and running new states display method', () => {
    VerbModule.prototype.display = jest.fn();
    VerbModule.prototype.onExit = jest.fn();
    MainMenuModule.prototype.display = jest.fn();
    MainMenuModule.prototype.onExit = jest.fn();

    state.setState(new VerbModule);
    state.setState(new MainMenuModule);

    expect(VerbModule.prototype.display).toBeCalledTimes(1);
    expect(VerbModule.prototype.onExit).toBeCalledTimes(1);
    expect(MainMenuModule.prototype.display).toBeCalledTimes(1);
    expect(MainMenuModule.prototype.onExit).not.toBeCalled();
  });

  test('order executes correctly when adding new state', () => {
    VerbModule.prototype.display = jest.fn();
    VerbModule.prototype.onExit = jest.fn();
    MainMenuModule.prototype.display = jest.fn();
    MainMenuModule.prototype.onExit = jest.fn();

    state.setState(new VerbModule);
    state.setState(new MainMenuModule);

    expect(VerbModule.prototype.display).toHaveBeenCalledBefore(VerbModule.prototype.onExit);
    expect(VerbModule.prototype.display).toHaveBeenCalledBefore(MainMenuModule.prototype.display);
    expect(MainMenuModule.prototype.display).toHaveBeenCalledBefore(MainMenuModule.prototype.onExit);
  });
});
