import onboarding from "../pageObjects/onboarding";
import Login from "../pageObjects/login";
const Onboarding = new onboarding()

it ('pass onboarding', function (){
    Onboarding.login()
    Onboarding.page0()
    Onboarding.page1()
    Onboarding.page2()
    Onboarding.page3()
    Onboarding.page4()
    Onboarding.page5()
    Onboarding.page6()
    Onboarding.page7()
    Onboarding.page8()
    Onboarding.page9()
    Onboarding.page10()
    Onboarding.page11()
    Onboarding.page12()
    Onboarding.page13()
    Onboarding.page14()
    Onboarding.page15()
    Onboarding.GetDashboard()
})