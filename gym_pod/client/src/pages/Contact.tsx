import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactValidation } from "../validation/GymValidation";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  program: "",
  message: "",
};

class Contact extends Component {
  render() {
    return (
      <>
        <Header />

        <section className="min-h-screen bg-black py-20">
          <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg">

            <h1 className="text-4xl font-bold text-center text-white mb-8">
              Contact Us
            </h1>

            <Formik
              initialValues={initialValues}
              validationSchema={ContactValidation}
              onSubmit={(values, { resetForm }) => {
                console.log(values);

                alert(
                  `Form Submitted Successfully

Name : ${values.name}

Email : ${values.email}

Phone : ${values.phone}

Program : ${values.program}

Message : ${values.message}`
                );

                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">

                  <div>
                    <label className="text-white">Full Name</label>

                    <Field
                      name="name"
                      className="w-full mt-2 p-3 rounded bg-gray-800 text-white border border-gray-700"
                    />

                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-white">Email</label>

                    <Field
                      type="email"
                      name="email"
                      className="w-full mt-2 p-3 rounded bg-gray-800 text-white border border-gray-700"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-white">Phone</label>

                    <Field
                      name="phone"
                      className="w-full mt-2 p-3 rounded bg-gray-800 text-white border border-gray-700"
                    />

                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-white">Program</label>

                    <Field
                      as="select"
                      name="program"
                      className="w-full mt-2 p-3 rounded bg-gray-800 text-white border border-gray-700"
                    >
                      <option value="">Select Program</option>
                      <option value="Strength Training">
                        Strength Training
                      </option>
                      <option value="Cardio">Cardio</option>
                      <option value="Yoga">Yoga</option>
                      <option value="HIIT">HIIT</option>
                    </Field>

                    <ErrorMessage
                      name="program"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-white">Message</label>

                    <Field
                      as="textarea"
                      rows={4}
                      name="message"
                      className="w-full mt-2 p-3 rounded bg-gray-800 text-white border border-gray-700"
                    />

                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded text-white font-semibold"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>

                </Form>
              )}
            </Formik>

          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Contact;