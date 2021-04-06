import { fireEvent, render, screen } from "@testing-library/react";
import LearnTopicButton from "../../../components/learn/LearnTopicButton";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import LearnKanaMode from "../../../types/learn/mode/LearnKanaMode";

const onClickHandler = jest.fn();

test('Should accept string icon', () => {
    render(
        <LearnTopicButton
            icon="ICON"
            type={new LearnKanaMode().getLearningTopics()[0]}
            selected={new LearnKanaMode().getLearningTopics()[0]}
            onClick={onClickHandler}
        />
    );
    expect(screen.getByText('ICON')).toBeInTheDocument();
    expect(screen.getByText('Hiragana')).toBeInTheDocument();
});

test('Should accept Font Awesome icon', () => {
    render(
        <LearnTopicButton
            icon={faCircle}
            type={new LearnKanaMode().getLearningTopics()[0]}
            selected={new LearnKanaMode().getLearningTopics()[0]}
            onClick={onClickHandler}
        />
    );
    expect(screen.getByText('Hiragana')).toBeInTheDocument();
});

test('Should have the class \'selected\' when the passed type matches the selected prop', () => {
    const { container } = render(
        <LearnTopicButton
            icon={faCircle}
            type={new LearnKanaMode().getLearningTopics()[0]}
            selected={new LearnKanaMode().getLearningTopics()[0]}
            onClick={onClickHandler}
        />
    );
    expect(container.firstChild).toHaveClass('selected');
});

test('Should have the class \'notSelected\' when the passed type does not match the selected prop', () => {
    const { container } = render(
        <LearnTopicButton
            icon={faCircle}
            type={new LearnKanaMode().getLearningTopics()[0]}
            selected={new LearnKanaMode().getLearningTopics()[1]}
            onClick={onClickHandler}
        />
    );
    expect(container.firstChild).toHaveClass('notSelected');
});

test('Clicking the button should call the onClick event handler with the passed type', () => {
    const component = render(
        <LearnTopicButton
            icon={faCircle}
            type={new LearnKanaMode().getLearningTopics()[0]}
            selected={new LearnKanaMode().getLearningTopics()[0]}
            onClick={onClickHandler}
        />
    );
    fireEvent.click(component.getByText('Hiragana'));
    expect(onClickHandler).toHaveBeenCalled();
});