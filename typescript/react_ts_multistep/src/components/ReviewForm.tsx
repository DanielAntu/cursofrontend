import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from "react-icons/bs";

type ReviewForm = {
    data: {
        review: string;
        comment: string;
    };
    updateFieldHandler: (key: string, value: string) => void;
};

import "./ReviewForm.css";

const ReviewForm = ({ data, updateFieldHandler }: ReviewForm) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input
                        type="radio"
                        name="review"
                        id="review"
                        value="unstisfied"
                        required
                        checked={data.review === "unsatisfied"}
                        onChange={(e) =>
                            updateFieldHandler("review", e.target.value)
                        }
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        name="review"
                        id="review"
                        value="neutral"
                        required
                        checked={data.review === "neutral"}
                        onChange={(e) =>
                            updateFieldHandler("review", e.target.value)
                        }
                    />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser Melhor</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        name="review"
                        id="review"
                        value="satisfied"
                        required
                        checked={data.review === "satisfied"}
                        onChange={(e) =>
                            updateFieldHandler("review", e.target.value)
                        }
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        name="review"
                        id="review"
                        value="very_satisfied"
                        required
                        checked={data.review === "very_satisfied"}
                        onChange={(e) =>
                            updateFieldHandler("review", e.target.value)
                        }
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentário:</label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Como foi sua experiência com o produto..."
                    required
                    value={data.comment || ""}
                    onChange={(e) =>
                        updateFieldHandler("comment", e.target.value)
                    }></textarea>
            </div>
        </div>
    );
};

export default ReviewForm;
