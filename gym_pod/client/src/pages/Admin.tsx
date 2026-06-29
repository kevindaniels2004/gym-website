import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AdminValidation } from "../validation/GymValidation";

const initialValues = {
  gymName: "",
  heroTitle: "",
  gymDescription: "",
  programName: "",
  trainerName: "",
  membershipPlan: "",
  planPrice: "",
  timing: "",
  buttonText: "",
  contactNumber: "",
};

class Admin extends Component {
  render() {
    return (
      <>
        <Header />

        <section className="bg-gray-100 py-16 min-h-screen">
          <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">

            <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">
              Gym Admin Panel
            </h1>

            <Formik
              initialValues={initialValues}
              validationSchema={AdminValidation}
              onSubmit={(values, { resetForm }) => {
                console.log(values);

                alert("Gym Details Saved Successfully!");

                resetForm();
              }}
            >
              <Form className="grid md:grid-cols-2 gap-6">

                {/* Gym Name */}

                <div>
                  <label className="font-semibold">
                    Gym Name
                  </label>

                  <Field
                    name="gymName"
                    className="w-full border p-3 rounded-lg mt-2"
                    placeholder="PowerFit Gym"
                  />

                  <ErrorMessage
                    name="gymName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Hero Title */}

                <div>
                  <label className="font-semibold">
                    Hero Title
                  </label>

                  <Field
                    name="heroTitle"
                    className="w-full border p-3 rounded-lg mt-2"
                    placeholder="Transform Your Body"
                  />

                  <ErrorMessage
                    name="heroTitle"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Description */}

                <div className="md:col-span-2">

                  <label className="font-semibold">
                    Gym Description
                  </label>

                  <Field
                    as="textarea"
                    rows={4}
                    name="gymDescription"
                    className="w-full border p-3 rounded-lg mt-2"
                  />

                  <ErrorMessage
                    name="gymDescription"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                </div>

                {/* Program */}

                <div>
                  <label className="font-semibold">
                    Program Name
                  </label>

                  <Field
                    name="programName"
                    className="w-full border p-3 rounded-lg mt-2"
                  />

                  <ErrorMessage
                    name="programName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Trainer */}

                <div>
                  <label className="font-semibold">
                    Trainer Name
                  </label>

                  <Field
                    name="trainerName"
                    className="w-full border p-3 rounded-lg mt-2"
                  />

                  <ErrorMessage
                    name="trainerName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Membership */}

                <div>
                  <label className="font-semibold">
                    Membership Plan
                  </label>

                  <Field
                    as="select"
                    name="membershipPlan"
                    className="w-full border p-3 rounded-lg mt-2"
                  >
                    <option value="">Select Plan</option>
                    <option>Basic</option>
                    <option>Premium</option>
                    <option>Elite</option>
                  </Field>

                  <ErrorMessage
                    name="membershipPlan"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Price */}

                <div>
                  <label className="font-semibold">
                    Plan Price
                  </label>

                  <Field
                    name="planPrice"
                    type="number"
                    className="w-full border p-3 rounded-lg mt-2"
                  />

                  <ErrorMessage
                    name="planPrice"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Timing */}

                <div>
                  <label className="font-semibold">
                    Gym Timing
                  </label>

                  <Field
                    name="timing"
                    className="w-full border p-3 rounded-lg mt-2"
                    placeholder="6 AM - 10 PM"
                  />

                  <ErrorMessage
                    name="timing"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Button */}

                <div>
                  <label className="font-semibold">
                    Button Text
                  </label>

                  <Field
                    name="buttonText"
                    className="w-full border p-3 rounded-lg mt-2"
                    placeholder="Join Now"
                  />

                  <ErrorMessage
                    name="buttonText"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Contact */}

                <div className="md:col-span-2">

                  <label className="font-semibold">
                    Contact Number
                  </label>

                  <Field
                    name="contactNumber"
                    className="w-full border p-3 rounded-lg mt-2"
                    placeholder="9876543210"
                  />

                  <ErrorMessage
                    name="contactNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                </div>

                {/* Submit */}

                <div className="md:col-span-2">

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold"
                  >
                    Save Gym Details
                  </button>

                </div>

              </Form>
            </Formik>

          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Admin;