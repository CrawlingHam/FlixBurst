interface TermsAndConditionsProps {
    onGoBack: () => void;
    onSupport: () => void;
}

export const PrivacyPolicy: React.FC<TermsAndConditionsProps> = ({ onGoBack, onSupport }) => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen ">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">Effective: October 29, 2024</p>

            <p className="text-gray-700 mb-6">
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p className="text-gray-700 mb-6">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Interpretation and Definitions</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Interpretation</h3>
            <p className="text-gray-700 mb-6">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Definitions</h3>
            <p className="text-gray-700 mb-4">For the purposes of this Privacy Policy:</p>

            <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li><strong>Account</strong>: a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Affiliate</strong>: an entity that controls, is controlled by, or is under common control with a party.</li>
                <li><strong>Application</strong>: refers to Fortnite123, the software program provided by the Company.</li>
                <li><strong>Company</strong>: referred to as either "the Company," "We," "Us," or "Our" in this Agreement.</li>
                <li><strong>Country</strong>: refers to Sweden.</li>
                <li><strong>Device</strong>: any device that can access the Service such as a computer, a cellphone, or a digital tablet.</li>
                <li><strong>Personal Data</strong>: any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong>: refers to the Application.</li>
                <li><strong>Service Provider</strong>: any natural or legal person who processes the data on behalf of the Company.</li>
                <li><strong>Third-party Social Media Service</strong>: any social network website through which a User can log in or create an account to use the Service.</li>
                <li><strong>Usage Data</strong>: data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                <li><strong>You</strong>: the individual accessing or using the Service.</li>
            </ul>

            {/* Collecting and Using Your Personal Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Collecting and Using Your Personal Data</h2>

            {/* Types of Data Collected */}
            <h3 className="text-xl font-medium text-gray-800 mb-3">Types of Data Collected</h3>

            {/* Personal Data */}
            <h4 className="text-lg font-medium text-gray-800 mb-2">Personal Data</h4>
            <p className="text-gray-700 mb-4">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
            </ul>

            {/* Usage Data */}
            <h4 className="text-lg font-medium text-gray-800 mb-2">Usage Data</h4>
            <p className="text-gray-700 mb-6">
                Usage Data is collected automatically when using the Service.
            </p>

            <p className="text-gray-700 mb-6">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>

            <p className="text-gray-700 mb-6">
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
            </p>
            <p className="text-gray-700 mb-6">
                We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
            </p>

            {/* Information from Third-Party Social Media Services */}
            <h4 className="text-lg font-medium text-gray-800 mb-2">Information from Third-Party Social Media Services</h4>
            <p className="text-gray-700 mb-6">
                The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li>Google</li>
                <li>Facebook</li>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>X</li>
                <li>Instagram</li>
            </ul>

            <p className="text-gray-700 mb-6">
                If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
            </p>

            <p className="text-gray-700 mb-6">
                You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
            </p>


            {/* Information Collected while Using the Application */}
            <h4 className="text-lg font-medium text-gray-800 mb-2">Information Collected while Using the Application</h4>
            <p className="text-gray-700 mb-6">
                While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li>Information regarding your location</li>
                <li>Pictures and other information from your Device's camera and photo library</li>
            </ul>

            <p className="text-gray-700 mb-6">
                We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.
            </p>
            <p className="text-gray-700 mb-6">
                You can enable or disable access to this information at any time, through Your Device settings.
            </p>


            {/* --> Use of Your Personal Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Use of Your Personal Data</h2>
            <p className="text-gray-700 mb-6">
                The Company may use Personal Data for the following purposes:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li><span className="font-bold mx-1"> To provide and maintain our Service</span>, including to monitor the usage of our Service.</li>
                <li><span className="font-bold mx-1"> To manage Your Account:</span> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                <li><span className="font-bold mx-1"> For the performance of a contract:</span> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                <li><span className="font-bold mx-1"> To contact You:</span> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                <li><span className="font-bold mx-1"> To provide You with news</span>, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                <li><span className="font-bold mx-1"> To manage Your requests:</span> To attend and manage Your requests to Us.</li>
                <li><span className="font-bold mx-1"> For business transfers:</span> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                <li><span className="font-bold mx-1"> For other purposes:</span> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
            </ul>

            <p className="text-gray-700 mb-6">
                We may share Your personal information in the following situations:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li><span className="font-bold mx-1">With Service Providers:</span>We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><span className="font-bold mx-1">For business transfers:</span>We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                <li><span className="font-bold mx-1">With Affiliates:</span>We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                <li><span className="font-bold mx-1">With business partners:</span>We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                <li><span className="font-bold mx-1">With other users</span>when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
                <li><span className="font-bold mx-1">With Your consent:</span>We may disclose Your personal information for any other purpose with Your consent.</li>
            </ul>


            {/* --> Retention of Your Personal Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Retention of Your Personal Data</h2>
            <p className="text-gray-700 mb-6">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>

            <p className="text-gray-700 mb-6">
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
            </p>


            {/* --> Transfer of Your Personal Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Transfer of Your Personal Data</h2>
            <p className="text-gray-700 mb-6">
                Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
            </p>

            <p className="text-gray-700 mb-6">
                Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
            </p>

            <p className="text-gray-700 mb-6">
                The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
            </p>


            {/* --> Delete Your Personal Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Delete Your Personal Data</h2>
            <p className="text-gray-700 mb-6">

            </p>

            <p className="text-gray-700 mb-6">
                You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
            </p>

            <p className="text-gray-700 mb-6">
                Our Service may give You the ability to delete certain information about You from within the Service.
            </p>

            <p className="text-gray-700 mb-6">
                You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
            </p>
            <p className="text-gray-700 mb-6">
                Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
            </p>


            {/* --> Disclosure of Your Personal Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Disclosure of Your Personal Data</h2>

            {/* Business Transactions */}
            <h4 className="text-lg font-medium text-gray-800 mb-2">Business Transactions</h4>
            <p className="text-gray-700 mb-6">
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
            </p>

            {/* Law enforcement */}
            <h4 className="text-lg font-medium text-gray-800 mb-2">Law enforcement</h4>
            <p className="text-gray-700 mb-6">
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
            </p>

            {/* Other legal requirements */}
            <h4 className="text-lg font-medium text-gray-800 mb-2">Other legal requirements</h4>
            <p className="text-gray-700 mb-6">
                The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
            </ul>


            {/* --> Security of Your Personal Data */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Security of Your Personal Data</h2>
            <p className="text-gray-700 mb-6">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>

            {/* --> Children's Privacy */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
            </p>

            <p className="text-gray-700 mb-6">
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
            </p>

            {/* --> Links to Other Websites */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Links to Other Websites</h2>
            <p className="text-gray-700 mb-6">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
            </p>

            <p className="text-gray-700 mb-6">
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>

            {/* Changes to this Privacy Policy */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
            </p>

            <p className="text-gray-700 mb-6">
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>

            <p className="text-gray-700 mb-6">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>


            {/* Contact Us */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
                Please <span className="mx-1 hover:underline hover:cursor-pointer font-bold" onClick={onSupport}>contact support</span> if you have any questions or concerns not already addressed in this Privacy Policy.
            </p>

            <button
                onClick={onGoBack}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
                Back to Login
            </button>
        </div>
    );
};