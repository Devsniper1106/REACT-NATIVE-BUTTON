import React from 'react'
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import AwesomeButton from '../index';

const DEFAULT_TEXT = 'Default';

describe('AwesomeButton', () => {
  it('should render', () => {
    const component = renderer.create(<AwesomeButton />).toJSON();

    expect(component).toMatchSnapshot();
  });

  it('should render with a view container', () => {
    const component = renderer.create(<AwesomeButton />).toJSON();

    expect(component.type).toEqual('View');
  });

  it('should render a default text children', () => {
    const component = renderer.create(<AwesomeButton>{DEFAULT_TEXT}</AwesomeButton>);
    const element = component.root.findByProps({testID: 'aws-btn-content-text'});

    expect(element.props.children).toEqual(DEFAULT_TEXT);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render a with default props dimensions', () => {
    const component = renderer.create(<AwesomeButton>{DEFAULT_TEXT}</AwesomeButton>);
    const { height, width } = component.root.props;

    expect(component.root.findByType(View).props.style[1].height).toBe(height);
    expect(component.root.findByType(View).props.style[1].width).toBe(width);
  });

  it('should render the button shadow element', () => {
    const component = renderer.create(<AwesomeButton>{DEFAULT_TEXT}</AwesomeButton>);
    const { height, raiseLevel } = component.root.props;
    const element = component.root.findByProps({testID: 'aws-btn-shadow'});

    expect(element.props.style[1].height).toBe(height - raiseLevel);
    expect(element.props.testID).toBe('aws-btn-shadow');
  });

  it('should render the button bottom element', () => {
    const component = renderer.create(<AwesomeButton>{DEFAULT_TEXT}</AwesomeButton>);
    const { height, raiseLevel } = component.root.props;
    const element = component.root.findByProps({testID: 'aws-btn-bottom'});

    expect(element.props.style[1].height).toBe(height - raiseLevel);
    expect(element.props.testID).toBe('aws-btn-bottom');
  });


  it('should render the button content element', () => {
    const component = renderer.create(<AwesomeButton>{DEFAULT_TEXT}</AwesomeButton>);
    const { height, raiseLevel } = component.root.props;
    const element = component.root.findByProps({testID: 'aws-btn-content'});

    expect(element.props.style[1].height).toBe(height - raiseLevel);
    expect(element.props.testID).toBe('aws-btn-content');
  });

  it('should render the button text view', () => {
    const component = renderer.create(<AwesomeButton>{DEFAULT_TEXT}</AwesomeButton>);
    const element = component.root.findByProps({testID: 'aws-btn-text'});

    expect(element.props.testID).toBe('aws-btn-text');
  });

  it('should render the button progress view', () => {
    const component = renderer.create(<AwesomeButton progress>{DEFAULT_TEXT}</AwesomeButton>);
    const element = component.root.findByProps({testID: 'aws-btn-progress'});

    expect(element.props.testID).toBe('aws-btn-progress');
  });

  it('should render the button active background', () => {
    const component = renderer.create(<AwesomeButton>{DEFAULT_TEXT}</AwesomeButton>);
    const element = component.root.findByProps({testID: 'aws-btn-active-background'});

    expect(element.props.testID).toBe('aws-btn-active-background');
  });

  it('should render the content placeholder on empty button', () => {
    const component = renderer.create(<AwesomeButton />);
    const element = component.root.findByProps({testID: 'aws-btn-content-placeholder'});

    expect(element.props.testID).toBe('aws-btn-content-placeholder');
  });
});
