import React from 'react/addons';
const { TestUtils } = React.addons;
import assert from 'assert';
import helloReact from '../lib/hello-react';

describe('component', function(){
  var div;
  var comp;

  function render(name) {
    comp = React.render(React.createElement(helloReact, {
      name: name
    }), div);
  }

  beforeEach(function () {
    div = document.createElement("div");
  });

  afterEach(function () {
    if (div) {
      React.unmountComponentAtNode(div);
      comp = null;
    }
  });

  it('renders container with button', function(){
    render('Mr Foo');

    assert(div.querySelector('div.hello-react'));
    assert(div.querySelector('button'));
  });

  it('shows hello message after clicking on button', function(){
    render('Mr Foo');
    var button = div.querySelector('button');

    TestUtils.SimulateNative.click(button);

    assert.equal(div.querySelector('div.message').textContent,
      'Hello Mr Foo');
  });

});
