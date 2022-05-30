import { Form, Field } from 'react-final-form';
import { useSearchParams, useNavigate } from 'react-router-dom';
import "../../style/style.scss";
import "./findForm.scss";

const FindForm: React.FC = () => {
    const [ queryParam, setQueryParam ] = useSearchParams();
    const navigate = useNavigate();
    return (
        <Form
            onSubmit={formData => {
                navigate(`/search/multi?query=${Object.values(formData)[0]}`)
            }}
            render={({handleSubmit}) => (
                <form
                    onSubmit={handleSubmit}
                    className='find-form flex'
                >
                    <div className='find-form__wrapper'>
                        <Field
                            name="query"
                            className="find-form__input"
                            component="input"
                            placeholder="Найти фильм, сериал, персону......"
                            autocomplete="off"
                        />
                    </div>
                    <button type="submit" className="find-form__button">Submit</button>
                </form>
            )}
        />
    )
}
export default FindForm;